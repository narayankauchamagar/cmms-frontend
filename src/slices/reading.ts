import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import Reading from '../models/owns/reading';
import api from '../utils/api';

const basePath = 'readings';
interface ReadingState {
  metersReadings: { [id: number]: Reading[] };
}

const initialState: ReadingState = {
  metersReadings: {}
};

const slice = createSlice({
  name: 'readings',
  initialState,
  reducers: {
    getReadings(
      state: ReadingState,
      action: PayloadAction<{ id: number; readings: Reading[] }>
    ) {
      const { readings, id } = action.payload;
      state.metersReadings[id] = readings;
    },
    createReading(
      state: ReadingState,
      action: PayloadAction<{
        meterId: number;
        reading: Reading;
      }>
    ) {
      const { reading, meterId } = action.payload;
      if (state.metersReadings[meterId]) {
        state.metersReadings[meterId].push(reading);
      } else state.metersReadings[meterId] = [reading];
    },
    deleteReading(
      state: ReadingState,
      action: PayloadAction<{
        meterId: number;
        id: number;
      }>
    ) {
      const { id, meterId } = action.payload;
      state.metersReadings[meterId] = state.metersReadings[meterId].filter(
        (reading) => reading.id !== id
      );
    }
  }
});

export const reducer = slice.reducer;

export const getReadings =
  (id: number): AppThunk =>
  async (dispatch) => {
    const readings = await api.get<Reading[]>(`${basePath}/meter/${id}`);
    dispatch(slice.actions.getReadings({ id, readings }));
  };

export const createReading =
  (id: number, reading: Partial<Reading>): AppThunk =>
  async (dispatch) => {
    const readingResponse = await api.post<Reading>(`${basePath}`, {
      ...reading,
      meter: { id }
    });
    dispatch(
      slice.actions.createReading({
        meterId: id,
        reading: readingResponse
      })
    );
  };

export const deleteReading =
  (meterId: number, id: number): AppThunk =>
  async (dispatch) => {
    const response = await api.deletes<{ success: boolean }>(
      `${basePath}/${id}`
    );
    const { success } = response;
    if (success) {
      dispatch(slice.actions.deleteReading({ meterId, id }));
    }
  };

export default slice;
