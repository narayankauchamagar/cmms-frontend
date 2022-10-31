import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import Location from '../models/owns/location';
import api from '../utils/api';

interface LocationState {
  locations: Location[];
}

const initialState: LocationState = {
  locations: []
};

const slice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    getLocations(
      state: LocationState,
      action: PayloadAction<{ locations: Location[] }>
    ) {
      const { locations } = action.payload;
      state.locations = locations;
    },
    addLocation(
      state: LocationState,
      action: PayloadAction<{ location: Location }>
    ) {
      const { location } = action.payload;
      state.locations = [...state.locations, location];
    },
    editLocation(
      state: LocationState,
      action: PayloadAction<{ location: Location }>
    ) {
      const { location } = action.payload;
      state.locations = state.locations.map((location1) => {
        if (location1.id === location.id) {
          return location;
        }
        return location1;
      });
    },
    deleteLocation(
      state: LocationState,
      action: PayloadAction<{ id: number }>
    ) {
      const { id } = action.payload;
      const locationIndex = state.locations.findIndex(
        (location) => location.id === id
      );
      state.locations.splice(locationIndex, 1);
    }
  }
});

export const reducer = slice.reducer;

export const getLocations = (): AppThunk => async (dispatch) => {
  const locations = await api.get<Location[]>('locations');
  dispatch(slice.actions.getLocations({ locations }));
};

export const addLocation =
  (location): AppThunk =>
  async (dispatch) => {
    const locationResponse = await api.post<Location>('locations', location);
    dispatch(slice.actions.addLocation({ location: locationResponse }));
  };
export const editLocation =
  (id: number, location): AppThunk =>
  async (dispatch) => {
    const locationResponse = await api.patch<Location>(
      `locations/${id}`,
      location
    );
    dispatch(slice.actions.editLocation({ location: locationResponse }));
  };
export const deleteLocation =
  (id: number): AppThunk =>
  async (dispatch) => {
    const locationResponse = await api.deletes<{ success: boolean }>(
      `locations/${id}`
    );
    const { success } = locationResponse;
    if (success) {
      dispatch(slice.actions.deleteLocation({ id }));
    }
  };

export default slice;
