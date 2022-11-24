import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import AdditionalCost from '../models/owns/additionalCost';
import api from '../utils/api';

const basePath = 'additional-costs';
interface AdditionalCostState {
  workOrdersRoot1: { [id: number]: AdditionalCost[] };
}

const initialState: AdditionalCostState = {
  workOrdersRoot1: {}
};

const slice = createSlice({
  name: 'additionalCosts',
  initialState,
  reducers: {
    getAdditionalCosts(
      state: AdditionalCostState,
      action: PayloadAction<{ id: number; additionalCosts: AdditionalCost[] }>
    ) {
      const { additionalCosts, id } = action.payload;
      state.workOrdersRoot1[id] = additionalCosts;
    },
    createAdditionalCost(
      state: AdditionalCostState,
      action: PayloadAction<{
        workOrderId: number;
        additionalCost: AdditionalCost;
      }>
    ) {
      const { additionalCost, workOrderId } = action.payload;
      state.workOrdersRoot1[workOrderId].push(additionalCost);
    },
    deleteAdditionalCost(
      state: AdditionalCostState,
      action: PayloadAction<{
        workOrderId: number;
        id: number;
      }>
    ) {
      const { id, workOrderId } = action.payload;
      state.workOrdersRoot1[workOrderId] = state.workOrdersRoot1[
        workOrderId
      ].filter((additionalCost) => additionalCost.id !== id);
    }
  }
});

export const reducer = slice.reducer;

export const getAdditionalCosts =
  (id: number): AppThunk =>
  async (dispatch) => {
    const additionalCosts = await api.get<AdditionalCost[]>(
      `${basePath}/work-order/${id}`
    );
    dispatch(slice.actions.getAdditionalCosts({ id, additionalCosts }));
  };

export const createAdditionalCost =
  (id: number, additionalCost: Partial<AdditionalCost>): AppThunk =>
  async (dispatch) => {
    const additionalCostResponse = await api.post<AdditionalCost>(
      `${basePath}`,
      { ...additionalCost, workOrder: { id } }
    );
    dispatch(
      slice.actions.createAdditionalCost({
        workOrderId: id,
        additionalCost: additionalCostResponse
      })
    );
  };

export const deleteAdditionalCost =
  (workOrderId: number, id: number): AppThunk =>
  async (dispatch) => {
    const response = await api.deletes<{ success: boolean }>(
      `${basePath}/${id}`
    );
    const { success } = response;
    if (success) {
      dispatch(slice.actions.deleteAdditionalCost({ workOrderId, id }));
    }
  };

export default slice;
