import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import AdditionalTime from '../models/owns/additionalTime';
import api from '../utils/api';

const basePath = 'additional-times';
interface AdditionalTimeState {
  timesByWorkOrder: { [id: number]: AdditionalTime[] };
}

const initialState: AdditionalTimeState = {
  timesByWorkOrder: {}
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
      state.timesByWorkOrder[id] = additionalTimes;
    },
    createAdditionalTime(
      state: AdditionalTimeState,
      action: PayloadAction<{
        workOrderId: number;
        additionalTime: AdditionalTime;
      }>
    ) {
      const { additionalTime, workOrderId } = action.payload;
      if (state.timesByWorkOrder[workOrderId]) {
        state.timesByWorkOrder[workOrderId].push(additionalTime);
      } else state.timesByWorkOrder[workOrderId] = [additionalTime];
    },
    editAdditionalTime(
      state: AdditionalTimeState,
      action: PayloadAction<{
        id: number;
        workOrderId: number;
        additionalTime: AdditionalTime;
      }>
    ) {
      const { additionalTime, workOrderId, id } = action.payload;
      state.timesByWorkOrder[workOrderId] = state.timesByWorkOrder[
        workOrderId
      ].map((addTime) => {
        if (addTime.id === id) {
          return additionalTime;
        }
        return addTime;
      });
    },
    deleteAdditionalTime(
      state: AdditionalTimeState,
      action: PayloadAction<{
        workOrderId: number;
        id: number;
      }>
    ) {
      const { id, workOrderId } = action.payload;
      state.timesByWorkOrder[workOrderId] = state.timesByWorkOrder[
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
      const filteredAdditionalTimes = state.timesByWorkOrder[
        workOrderId
      ].filter((aT) => aT.id !== additionalTime.id);
      filteredAdditionalTimes.push(additionalTime);
      state.timesByWorkOrder[workOrderId] = filteredAdditionalTimes;
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

export const editAdditionalTime =
  (id: number, workOrderId: number, additionalTime: AdditionalTime): AppThunk =>
  async (dispatch) => {
    const additionalTimeResponse = await api.patch<AdditionalTime>(
      `${basePath}/${id}`,
      additionalTime
    );
    dispatch(
      slice.actions.editAdditionalTime({
        workOrderId,
        id,
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
