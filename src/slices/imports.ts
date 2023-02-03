import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import api from '../utils/api';
import { ImportDTO, ImportResponse } from '../models/owns/imports';
import { EntityType } from 'src/content/own/Imports';

const basePath = 'import';
interface ImportsState {
  responses: Record<EntityType, ImportResponse>;
}
const initialImportResponse = { created: 0, updated: 0 };

const initialState: ImportsState = {
  responses: {
    'work-orders': initialImportResponse,
    locations: initialImportResponse,
    parts: initialImportResponse,
    assets: initialImportResponse,
    meters: initialImportResponse
  }
};

const slice = createSlice({
  name: 'parts',
  initialState,
  reducers: {
    importEntity(
      state: ImportsState,
      action: PayloadAction<{ response: ImportResponse; entity: EntityType }>
    ) {
      const { response, entity } = action.payload;
      state.responses[entity] = response;
    }
  }
});

export const reducer = slice.reducer;

export const importEntity =
  (values: ImportDTO[], entity: EntityType): AppThunk =>
  async (dispatch) => {
    const response = await api.post<ImportResponse>(
      `${basePath}/${entity}`,
      values,
      {},
      true
    );
    dispatch(slice.actions.importEntity({ response, entity }));
  };

export default slice;
