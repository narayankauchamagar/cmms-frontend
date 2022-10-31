import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import Meter from '../models/owns/meter';
import api from '../utils/api';

const basePath = 'meters';
interface MeterState {
  meters: Meter[];
}

const initialState: MeterState = {
  meters: []
};

const slice = createSlice({
  name: 'meters',
  initialState,
  reducers: {
    getMeters(state: MeterState, action: PayloadAction<{ meters: Meter[] }>) {
      const { meters } = action.payload;
      state.meters = meters;
    },
    addMeter(state: MeterState, action: PayloadAction<{ meter: Meter }>) {
      const { meter } = action.payload;
      state.meters = [...state.meters, meter];
    },
    editMeter(state: MeterState, action: PayloadAction<{ meter: Meter }>) {
      const { meter } = action.payload;
      state.meters = state.meters.map((meter1) => {
        if (meter1.id === meter.id) {
          return meter;
        }
        return meter1;
      });
    },
    deleteMeter(state: MeterState, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const meterIndex = state.meters.findIndex((meter) => meter.id === id);
      state.meters.splice(meterIndex, 1);
    }
  }
});

export const reducer = slice.reducer;

export const getMeters = (): AppThunk => async (dispatch) => {
  const meters = await api.get<Meter[]>(basePath);
  dispatch(slice.actions.getMeters({ meters }));
};

export const addMeter =
  (meter): AppThunk =>
  async (dispatch) => {
    const meterResponse = await api.post<Meter>(basePath, meter);
    dispatch(slice.actions.addMeter({ meter: meterResponse }));
  };
export const editMeter =
  (id: number, meter): AppThunk =>
  async (dispatch) => {
    const meterResponse = await api.patch<Meter>(`${basePath}/${id}`, meter);
    dispatch(slice.actions.editMeter({ meter: meterResponse }));
  };
export const deleteMeter =
  (id: number): AppThunk =>
  async (dispatch) => {
    const meterResponse = await api.deletes<{ success: boolean }>(
      `${basePath}/${id}`
    );
    const { success } = meterResponse;
    if (success) {
      dispatch(slice.actions.deleteMeter({ id }));
    }
  };

export default slice;
