import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import Request from '../models/owns/request';
import api from '../utils/api';
import WorkOrder from '../models/owns/workOrder';

const basePath = 'requests';
interface RequestState {
  requests: Request[];
  loadingGet: boolean;
}

const initialState: RequestState = {
  requests: [],
  loadingGet: false
};

const slice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    getRequests(
      state: RequestState,
      action: PayloadAction<{ requests: Request[] }>
    ) {
      const { requests } = action.payload;
      state.requests = requests;
    },
    addRequest(
      state: RequestState,
      action: PayloadAction<{ request: Request }>
    ) {
      const { request } = action.payload;
      state.requests = [...state.requests, request];
    },
    editRequest(
      state: RequestState,
      action: PayloadAction<{ request: Request }>
    ) {
      const { request } = action.payload;
      state.requests = state.requests.map((request1) => {
        if (request1.id === request.id) {
          return request;
        }
        return request1;
      });
    },
    deleteRequest(state: RequestState, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const requestIndex = state.requests.findIndex(
        (request) => request.id === id
      );
      state.requests.splice(requestIndex, 1);
    },
    approveRequest(
      state: RequestState,
      action: PayloadAction<{ id: number; workOrder: WorkOrder }>
    ) {
      const { id, workOrder } = action.payload;
      state.requests = state.requests.map((request) => {
        if (request.id === id) {
          return { ...request, workOrder };
        }
        return request;
      });
    },
    cancelRequest(state: RequestState, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      state.requests = state.requests.map((request) => {
        if (request.id === id) {
          return { ...request, cancelled: true };
        }
        return request;
      });
    },
    setLoadingGet(
      state: RequestState,
      action: PayloadAction<{ loading: boolean }>
    ) {
      const { loading } = action.payload;
      state.loadingGet = loading;
    }
  }
});

export const reducer = slice.reducer;

export const getRequests = (): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoadingGet({ loading: true }));
  const requests = await api.get<Request[]>(basePath);
  dispatch(slice.actions.getRequests({ requests }));
  dispatch(slice.actions.setLoadingGet({ loading: false }));
};

export const addRequest =
  (request): AppThunk =>
  async (dispatch) => {
    const requestResponse = await api.post<Request>(basePath, request);
    dispatch(slice.actions.addRequest({ request: requestResponse }));
  };
export const editRequest =
  (id: number, request): AppThunk =>
  async (dispatch) => {
    const requestResponse = await api.patch<Request>(
      `${basePath}/${id}`,
      request
    );
    dispatch(slice.actions.editRequest({ request: requestResponse }));
  };
export const deleteRequest =
  (id: number): AppThunk =>
  async (dispatch) => {
    const requestResponse = await api.deletes<{ success: boolean }>(
      `${basePath}/${id}`
    );
    const { success } = requestResponse;
    if (success) {
      dispatch(slice.actions.deleteRequest({ id }));
    }
  };

export const approveRequest =
  (id: number): AppThunk =>
  async (dispatch) => {
    const workOrder = await api.patch<WorkOrder>(
      `${basePath}/${id}/approve`,
      {}
    );
    dispatch(slice.actions.approveRequest({ id, workOrder }));
    return workOrder.id;
  };
export const cancelRequest =
  (id: number): AppThunk =>
  async (dispatch) => {
    const request = await api.patch<WorkOrder>(`${basePath}/${id}/cancel`, {});
    dispatch(slice.actions.cancelRequest({ id }));
  };
export default slice;
