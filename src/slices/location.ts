import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import Location, { LocationRow } from '../models/owns/location';
import api from '../utils/api';

interface LocationState {
  locations: Location[];
  locationsHierarchy: LocationRow[];
}

const initialState: LocationState = {
  locations: [],
  locationsHierarchy: []
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
    },
    getLocationChildren(
      state: LocationState,
      action: PayloadAction<{ locations: LocationRow[]; id: number }>
    ) {
      const { locations, id } = action.payload;
      const parent = state.locationsHierarchy.findIndex(
        (location) => location.id === id
      );
      if (parent !== -1)
        state.locationsHierarchy[parent].childrenFetched = true;

      state.locationsHierarchy = locations.reduce((acc, location) => {
        //check if location already exists in state
        const locationInState = state.locationsHierarchy.findIndex(
          (location1) => location1.id === location.id
        );
        //not found
        if (locationInState === -1) return [...acc, location];
        //found
        acc[locationInState] = location;
        return acc;
      }, state.locationsHierarchy);
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

export const getLocationChildren =
  (id: number, parents: number[]): AppThunk =>
  async (dispatch) => {
    const locations = await api.get<Location[]>(`locations/children/${id}`);
    dispatch(
      slice.actions.getLocationChildren({
        id,
        locations: locations.map((location) => {
          return { ...location, hierarchy: [...parents, location.id] };
        })
      })
    );
  };
export default slice;
