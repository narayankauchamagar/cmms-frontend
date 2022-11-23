import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import PartQuantity from '../models/owns/partQuantity';
import api from '../utils/api';

const basePath = 'part-quantities';
interface PartQuantityState {
  workOrders: { [id: number]: PartQuantity[] };
}

const initialState: PartQuantityState = {
  workOrders: {}
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
      state.workOrders[id] = partQuantities;
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

export const editPartQuantity =
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

export default slice;
