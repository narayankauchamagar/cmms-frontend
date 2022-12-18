import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import PurchaseOrder from '../models/owns/purchaseOrder';
import api from '../utils/api';

const basePath = 'purchase-orders';
interface PurchaseOrderState {
  purchaseOrders: PurchaseOrder[];
  loadingGet: boolean;
}

const initialState: PurchaseOrderState = {
  purchaseOrders: [],
  loadingGet: false
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
    },
    setLoadingGet(
      state: PurchaseOrderState,
      action: PayloadAction<{ loading: boolean }>
    ) {
      const { loading } = action.payload;
      state.loadingGet = loading;
    }
  }
});

export const reducer = slice.reducer;

export const getPurchaseOrders = (): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoadingGet({ loading: true }));
  const purchaseOrders = await api.get<PurchaseOrder[]>(basePath);
  dispatch(slice.actions.getPurchaseOrders({ purchaseOrders }));
  dispatch(slice.actions.setLoadingGet({ loading: false }));
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
    return purchaseOrderResponse.id;
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
export const respondPurchaseOrder =
  (id: number, approved: boolean): AppThunk =>
  async (dispatch) => {
    const purchaseOrderResponse = await api.patch<PurchaseOrder>(
      `${basePath}/${id}/respond?approved=${approved}`,
      {}
    );
    dispatch(
      slice.actions.editPurchaseOrder({ purchaseOrder: purchaseOrderResponse })
    );
  };
export const getSinglePurchaseOrder =
  (id: number): AppThunk =>
  async (dispatch) => {
    const purchaseOrder = await api.get<PurchaseOrder>(`${basePath}/${id}`);
    dispatch(slice.actions.editPurchaseOrder({ purchaseOrder }));
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
