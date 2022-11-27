import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import AdditionalTime from '../models/owns/additionalTime';
import api from '../utils/api';

const basePath = 'additional-times';
interface AdditionalTimeState {
  workOrdersRoot: { [id: number]: AdditionalTime[] };
}

const initialState: AdditionalTimeState = {
  workOrdersRoot: {}
};

const slice = createSlice({
  name: 'additionalTimes',
  initialState,
  reducers: {
    getAdditionalTimes(
      state: AdditionalTimeState,
      action: PayloadAction<{ id: number; additionalTimes: AdditionalTime[] }>
    ) {
      const { additionalTimes, id } = action.payload;
      state.workOrdersRoot[id] = additionalTimes;
    },
    createAdditionalTime(
      state: AdditionalTimeState,
      action: PayloadAction<{
        workOrderId: number;
        additionalTime: AdditionalTime;
      }>
    ) {
      const { additionalTime, workOrderId } = action.payload;
      if (state.workOrdersRoot[workOrderId]) {
        state.workOrdersRoot[workOrderId].push(additionalTime);
      } else state.workOrdersRoot[workOrderId] = [additionalTime];
    },
    deleteAdditionalTime(
      state: AdditionalTimeState,
      action: PayloadAction<{
        workOrderId: number;
        id: number;
      }>
    ) {
      const { id, workOrderId } = action.payload;
      state.workOrdersRoot[workOrderId] = state.workOrdersRoot[
        workOrderId
      ].filter((additionalTime) => additionalTime.id !== id);
    },
    controlTimer(
      state: AdditionalTimeState,
      action: PayloadAction<{
        workOrderId: number;
        additionalTime: AdditionalTime;
      }>
    ) {
      const { additionalTime, workOrderId } = action.payload;
      const filteredAdditionalTimes = state.workOrdersRoot[workOrderId].filter(
        (aT) => aT.id !== additionalTime.id
      );
      filteredAdditionalTimes.push(additionalTime);
      state.workOrdersRoot[workOrderId] = filteredAdditionalTimes;
    }
  }
});

export const reducer = slice.reducer;

export const getAdditionalTimes =
  (id: number): AppThunk =>
  async (dispatch) => {
    const additionalTimes = await api.get<AdditionalTime[]>(
      `${basePath}/work-order/${id}`
    );
    dispatch(slice.actions.getAdditionalTimes({ id, additionalTimes }));
  };

export const createAdditionalTime =
  (id: number, additionalTime: Partial<AdditionalTime>): AppThunk =>
  async (dispatch) => {
    const additionalTimeResponse = await api.post<AdditionalTime>(
      `${basePath}`,
      { ...additionalTime, workOrder: { id } }
    );
    dispatch(
      slice.actions.createAdditionalTime({
        workOrderId: id,
        additionalTime: additionalTimeResponse
      })
    );
  };

export const deleteAdditionalTime =
  (workOrderId: number, id: number): AppThunk =>
  async (dispatch) => {
    const response = await api.deletes<{ success: boolean }>(
      `${basePath}/${id}`
    );
    const { success } = response;
    if (success) {
      dispatch(slice.actions.deleteAdditionalTime({ workOrderId, id }));
    }
  };

export const controlTimer =
  (start: boolean, id: number): AppThunk =>
  async (dispatch) => {
    const response = await api.post<AdditionalTime>(
      `${basePath}/work-order/${id}?start=${start}`,
      {}
    );
    dispatch(
      slice.actions.controlTimer({
        additionalTime: response,
        workOrderId: id
      })
    );
  };

export default slice;
