import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import Request from '../models/owns/request';
import api from '../utils/api';

const basePath = 'requests';
interface RequestState {
  requests: Request[];
}

const initialState: RequestState = {
  requests: []
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
    }
  }
});

export const reducer = slice.reducer;

export const getRequests = (): AppThunk => async (dispatch) => {
  const requests = await api.get<Request[]>(basePath);
  dispatch(slice.actions.getRequests({ requests }));
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

export default slice;
