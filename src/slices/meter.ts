import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import Meter from '../models/owns/meter';
import api from '../utils/api';

const basePath = 'meters';
interface MeterState {
  meters: Meter[];
  metersByAsset: { [id: number]: Meter[] };
  loadingGet: boolean;
}

const initialState: MeterState = {
  meters: [],
  metersByAsset: {},
  loadingGet: false
};

const slice = createSlice({
  name: 'meters',
  initialState,
  reducers: {
    getMeters(state: MeterState, action: PayloadAction<{ meters: Meter[] }>) {
      const { meters } = action.payload;
      state.meters = meters;
    },
    getMetersByAsset(
      state: MeterState,
      action: PayloadAction<{ id: number; meters: Meter[] }>
    ) {
      const { meters, id } = action.payload;
      state.metersByAsset[id] = meters;
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
    },
    setLoadingGet(
      state: MeterState,
      action: PayloadAction<{ loading: boolean }>
    ) {
      const { loading } = action.payload;
      state.loadingGet = loading;
    }
  }
});

export const reducer = slice.reducer;

export const getMeters = (): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoadingGet({ loading: true }));
  const meters = await api.get<Meter[]>(basePath);
  dispatch(slice.actions.getMeters({ meters }));
  dispatch(slice.actions.setLoadingGet({ loading: false }));
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
export const getSingleMeter =
  (id: number): AppThunk =>
  async (dispatch) => {
    const meterResponse = await api.get<Meter>(`${basePath}/${id}`);
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

export const getMetersByAsset =
  (id: number): AppThunk =>
  async (dispatch) => {
    const meters = await api.get<Meter[]>(`${basePath}/asset/${id}`);
    dispatch(slice.actions.getMetersByAsset({ id, meters }));
  };

export default slice;
