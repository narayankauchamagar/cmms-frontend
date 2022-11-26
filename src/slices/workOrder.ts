import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import WorkOrder from '../models/owns/workOrder';
import api from '../utils/api';

const basePath = 'work-orders';
interface WorkOrderState {
  workOrders: WorkOrder[];
  locations1: { [key: number]: WorkOrder[] };
}

const initialState: WorkOrderState = {
  workOrders: [],
  locations1: {}
};

const slice = createSlice({
  name: 'workOrders',
  initialState,
  reducers: {
    getWorkOrders(
      state: WorkOrderState,
      action: PayloadAction<{ workOrders: WorkOrder[] }>
    ) {
      const { workOrders } = action.payload;
      state.workOrders = workOrders;
    },
    addWorkOrder(
      state: WorkOrderState,
      action: PayloadAction<{ workOrder: WorkOrder }>
    ) {
      const { workOrder } = action.payload;
      state.workOrders = [...state.workOrders, workOrder];
    },
    editWorkOrder(
      state: WorkOrderState,
      action: PayloadAction<{ workOrder: WorkOrder }>
    ) {
      const { workOrder } = action.payload;
      state.workOrders = state.workOrders.map((workOrder1) => {
        if (workOrder1.id === workOrder.id) {
          return workOrder;
        }
        return workOrder1;
      });
    },
    deleteWorkOrder(
      state: WorkOrderState,
      action: PayloadAction<{ id: number }>
    ) {
      const { id } = action.payload;
      const workOrderIndex = state.workOrders.findIndex(
        (workOrder) => workOrder.id === id
      );
      state.workOrders.splice(workOrderIndex, 1);
    },
    getWorkOrdersByLocation(
      state: WorkOrderState,
      action: PayloadAction<{ workOrders: WorkOrder[]; id: number }>
    ) {
      const { workOrders, id } = action.payload;
      state.locations1[id] = workOrders;
    }
  }
});

export const reducer = slice.reducer;

export const getWorkOrders = (): AppThunk => async (dispatch) => {
  const workOrders = await api.get<WorkOrder[]>(basePath);
  dispatch(slice.actions.getWorkOrders({ workOrders }));
};

export const addWorkOrder =
  (workOrder): AppThunk =>
  async (dispatch) => {
    const workOrderResponse = await api.post<WorkOrder>(basePath, workOrder);
    dispatch(slice.actions.addWorkOrder({ workOrder: workOrderResponse }));
  };
export const editWorkOrder =
  (id: number, workOrder): AppThunk =>
  async (dispatch) => {
    const workOrderResponse = await api.patch<WorkOrder>(
      `${basePath}/${id}`,
      workOrder
    );
    dispatch(slice.actions.editWorkOrder({ workOrder: workOrderResponse }));
  };
export const deleteWorkOrder =
  (id: number): AppThunk =>
  async (dispatch) => {
    const workOrderResponse = await api.deletes<{ success: boolean }>(
      `${basePath}/${id}`
    );
    const { success } = workOrderResponse;
    if (success) {
      dispatch(slice.actions.deleteWorkOrder({ id }));
    }
  };

export const getWorkOrdersByLocation =
  (id: number): AppThunk =>
  async (dispatch) => {
    const workOrders = await api.get<WorkOrder[]>(`${basePath}/location/${id}`);
    dispatch(
      slice.actions.getWorkOrdersByLocation({
        id,
        workOrders
      })
    );
  };
export default slice;
