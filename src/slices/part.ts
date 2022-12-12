import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import Part, { PartMiniDTO } from '../models/owns/part';
import api from '../utils/api';

const basePath = 'parts';
interface PartState {
  parts: Part[];
  partsMini: PartMiniDTO[];
  loadingGet: boolean;
}

const initialState: PartState = {
  parts: [],
  partsMini: [],
  loadingGet: false
};

const slice = createSlice({
  name: 'parts',
  initialState,
  reducers: {
    getParts(state: PartState, action: PayloadAction<{ parts: Part[] }>) {
      const { parts } = action.payload;
      state.parts = parts;
    },
    getPartsMini(
      state: PartState,
      action: PayloadAction<{ parts: PartMiniDTO[] }>
    ) {
      const { parts } = action.payload;
      state.partsMini = parts;
    },
    addPart(state: PartState, action: PayloadAction<{ part: Part }>) {
      const { part } = action.payload;
      state.parts = [...state.parts, part];
    },
    editPart(state: PartState, action: PayloadAction<{ part: Part }>) {
      const { part } = action.payload;
      state.parts = state.parts.map((part1) => {
        if (part1.id === part.id) {
          return part;
        }
        return part1;
      });
    },
    deletePart(state: PartState, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const partIndex = state.parts.findIndex((part) => part.id === id);
      state.parts.splice(partIndex, 1);
    },
    setLoadingGet(
      state: PartState,
      action: PayloadAction<{ loading: boolean }>
    ) {
      const { loading } = action.payload;
      state.loadingGet = loading;
    }
  }
});

export const reducer = slice.reducer;

export const getParts = (): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoadingGet({ loading: true }));
  const parts = await api.get<Part[]>(basePath);
  dispatch(slice.actions.getParts({ parts }));
  dispatch(slice.actions.setLoadingGet({ loading: false }));
};
export const getPartsMini = (): AppThunk => async (dispatch) => {
  const parts = await api.get<PartMiniDTO[]>(`${basePath}/mini`);
  dispatch(slice.actions.getPartsMini({ parts }));
};
export const addPart =
  (part): AppThunk =>
  async (dispatch) => {
    const partResponse = await api.post<Part>(basePath, part);
    dispatch(slice.actions.addPart({ part: partResponse }));
  };
export const editPart =
  (id: number, part): AppThunk =>
  async (dispatch) => {
    const partResponse = await api.patch<Part>(`${basePath}/${id}`, part);
    dispatch(slice.actions.editPart({ part: partResponse }));
  };
export const deletePart =
  (id: number): AppThunk =>
  async (dispatch) => {
    const partResponse = await api.deletes<{ success: boolean }>(
      `${basePath}/${id}`
    );
    const { success } = partResponse;
    if (success) {
      dispatch(slice.actions.deletePart({ id }));
    }
  };

export default slice;
