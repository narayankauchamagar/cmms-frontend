import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import PurchaseOrder from '../models/owns/purchaseOrder';
import api from '../utils/api';

const basePath = 'purchase-orders';
interface PurchaseOrderState {
  purchaseOrders: PurchaseOrder[];
}

const initialState: PurchaseOrderState = {
  purchaseOrders: []
};

const slice = createSlice({
  name: 'purchaseOrders',
  initialState,
  reducers: {
    getPurchaseOrders(
      state: PurchaseOrderState,
      action: PayloadAction<{ purchaseOrders: PurchaseOrder[] }>
    ) {
      const { purchaseOrders } = action.payload;
      state.purchaseOrders = purchaseOrders;
    },
    addPurchaseOrder(
      state: PurchaseOrderState,
      action: PayloadAction<{ purchaseOrder: PurchaseOrder }>
    ) {
      const { purchaseOrder } = action.payload;
      state.purchaseOrders = [...state.purchaseOrders, purchaseOrder];
    },
    editPurchaseOrder(
      state: PurchaseOrderState,
      action: PayloadAction<{ purchaseOrder: PurchaseOrder }>
    ) {
      const { purchaseOrder } = action.payload;
      state.purchaseOrders = state.purchaseOrders.map((purchaseOrder1) => {
        if (purchaseOrder1.id === purchaseOrder.id) {
          return purchaseOrder;
        }
        return purchaseOrder1;
      });
    },
    deletePurchaseOrder(
      state: PurchaseOrderState,
      action: PayloadAction<{ id: number }>
    ) {
      const { id } = action.payload;
      const purchaseOrderIndex = state.purchaseOrders.findIndex(
        (purchaseOrder) => purchaseOrder.id === id
      );
      state.purchaseOrders.splice(purchaseOrderIndex, 1);
    }
  }
});

export const reducer = slice.reducer;

export const getPurchaseOrders = (): AppThunk => async (dispatch) => {
  const purchaseOrders = await api.get<PurchaseOrder[]>(basePath);
  dispatch(slice.actions.getPurchaseOrders({ purchaseOrders }));
};

export const addPurchaseOrder =
  (purchaseOrder): AppThunk =>
  async (dispatch) => {
    const purchaseOrderResponse = await api.post<PurchaseOrder>(
      basePath,
      purchaseOrder
    );
    dispatch(
      slice.actions.addPurchaseOrder({ purchaseOrder: purchaseOrderResponse })
    );
  };
export const editPurchaseOrder =
  (id: number, purchaseOrder): AppThunk =>
  async (dispatch) => {
    const purchaseOrderResponse = await api.patch<PurchaseOrder>(
      `${basePath}/${id}`,
      purchaseOrder
    );
    dispatch(
      slice.actions.editPurchaseOrder({ purchaseOrder: purchaseOrderResponse })
    );
  };
export const deletePurchaseOrder =
  (id: number): AppThunk =>
  async (dispatch) => {
    const purchaseOrderResponse = await api.deletes<{ success: boolean }>(
      `${basePath}/${id}`
    );
    const { success } = purchaseOrderResponse;
    if (success) {
      dispatch(slice.actions.deletePurchaseOrder({ id }));
    }
  };

export default slice;
