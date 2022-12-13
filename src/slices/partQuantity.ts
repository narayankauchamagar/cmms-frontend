import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import PartQuantity from '../models/owns/partQuantity';
import api from '../utils/api';

const basePath = 'part-quantities';
interface PartQuantityState {
  partQuantitiesByWorkOrder: { [id: number]: PartQuantity[] };
}

const initialState: PartQuantityState = {
  partQuantitiesByWorkOrder: {}
};

const slice = createSlice({
  name: 'partQuantities',
  initialState,
  reducers: {
    getPartQuantitys(
      state: PartQuantityState,
      action: PayloadAction<{ id: number; partQuantities: PartQuantity[] }>
    ) {
      const { partQuantities, id } = action.payload;
      state.partQuantitiesByWorkOrder[id] = partQuantities;
    },
    editPartQuantity(
      state: PartQuantityState,
      action: PayloadAction<{
        workOrderId: number;
        id: number;
        partQuantity: PartQuantity;
      }>
    ) {
      const { partQuantity, id, workOrderId } = action.payload;
      state.partQuantitiesByWorkOrder[workOrderId] =
        state.partQuantitiesByWorkOrder[workOrderId].map((pq) => {
          if (pq.id === id) {
            return partQuantity;
          } else return pq;
        });
    }
  }
});

export const reducer = slice.reducer;

export const getPartQuantitys =
  (id: number): AppThunk =>
  async (dispatch) => {
    const partQuantities = await api.get<PartQuantity[]>(
      `${basePath}/work-order/${id}`
    );
    dispatch(slice.actions.getPartQuantitys({ id, partQuantities }));
  };

export const editWOPartQuantities =
  (id: number, parts: number[]): AppThunk =>
  async (dispatch) => {
    const partQuantities = await api.patch<PartQuantity[]>(
      `${basePath}/work-order/${id}`,
      parts,
      null,
      true
    );
    dispatch(
      slice.actions.getPartQuantitys({
        id,
        partQuantities
      })
    );
  };

export const editPartQuantity =
  (workOrderId: number, id: number, quantity: number): AppThunk =>
  async (dispatch) => {
    const partQuantity = await api.patch<PartQuantity>(
      `${basePath}/${id}`,
      { quantity },
      null,
      true
    );
    dispatch(
      slice.actions.editPartQuantity({
        workOrderId,
        id,
        partQuantity
      })
    );
  };

export default slice;
