import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import SetType from '../models/owns/setType';
import api from '../utils/api';

const basePath = 'sets';
interface SetState {
  sets: SetType[];
}

const initialState: SetState = {
  sets: []
};

const slice = createSlice({
  name: 'sets',
  initialState,
  reducers: {
    getSets(state: SetState, action: PayloadAction<{ sets: SetType[] }>) {
      const { sets } = action.payload;
      state.sets = sets;
    },
    addSet(state: SetState, action: PayloadAction<{ set: SetType }>) {
      const { set } = action.payload;
      state.sets = [...state.sets, set];
    },
    editSet(state: SetState, action: PayloadAction<{ set: SetType }>) {
      const { set } = action.payload;
      state.sets = state.sets.map((set1) => {
        if (set1.id === set.id) {
          return set;
        }
        return set1;
      });
    },
    deleteSet(state: SetState, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const setIndex = state.sets.findIndex((set) => set.id === id);
      state.sets.splice(setIndex, 1);
    }
  }
});

export const reducer = slice.reducer;

export const getSets = (): AppThunk => async (dispatch) => {
  const sets = await api.get<SetType[]>(basePath);
  dispatch(slice.actions.getSets({ sets }));
};

export const addSet =
  (set): AppThunk =>
  async (dispatch) => {
    const setResponse = await api.post<SetType>(basePath, set);
    dispatch(slice.actions.addSet({ set: setResponse }));
  };
export const editSet =
  (id: number, set): AppThunk =>
  async (dispatch) => {
    const setResponse = await api.patch<SetType>(`${basePath}/${id}`, set);
    dispatch(slice.actions.editSet({ set: setResponse }));
  };
export const deleteSet =
  (id: number): AppThunk =>
  async (dispatch) => {
    const setResponse = await api.deletes<{ success: boolean }>(
      `${basePath}/${id}`
    );
    const { success } = setResponse;
    if (success) {
      dispatch(slice.actions.deleteSet({ id }));
    }
  };

export default slice;
