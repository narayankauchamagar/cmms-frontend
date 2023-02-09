import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import api from '../utils/api';

const basePath = 'export';
type EntityType = 'work-orders' | 'assets' | 'locations' | 'parts' | 'meters';
interface ExportsState {
  responses: Record<EntityType, { url: string }>;
  loadingExport: Record<EntityType, boolean>;
}
const initialExportResponse = { url: '' };

const initialState: ExportsState = {
  responses: {
    'work-orders': initialExportResponse,
    assets: initialExportResponse,
    locations: initialExportResponse,
    parts: initialExportResponse,
    meters: initialExportResponse
  },
  loadingExport: {
    'work-orders': false,
    assets: false,
    locations: false,
    parts: false,
    meters: false
  }
};

const slice = createSlice({
  name: 'exports',
  initialState,
  reducers: {
    exportEntity(
      state: ExportsState,
      action: PayloadAction<{ url: string; entity: EntityType }>
    ) {
      const { url, entity } = action.payload;
      state.responses[entity].url = url;
    },
    setLoading(
      state: ExportsState,
      action: PayloadAction<{ entity: EntityType; loading: boolean }>
    ) {
      const { loading, entity } = action.payload;
      state.loadingExport[entity] = loading;
    }
  }
});

export const reducer = slice.reducer;

export const exportEntity =
  (entity: EntityType): AppThunk =>
  async (dispatch) => {
    dispatch(slice.actions.setLoading({ entity, loading: true }));
    try {
      const response = await api.get<{ success: boolean; message: string }>(
        `${basePath}/${entity}`
      );
      return response.message;
      dispatch(slice.actions.exportEntity({ url: response.message, entity }));
    } finally {
      dispatch(slice.actions.setLoading({ entity, loading: false }));
    }
  };

export default slice;
