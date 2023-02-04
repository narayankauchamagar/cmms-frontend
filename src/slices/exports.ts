import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import api from '../utils/api';

const basePath = 'export';
type EntityType = 'work-orders';
interface ExportsState {
  responses: Record<EntityType, { url: string }>;
  loadingExport: boolean;
}
const initialExportResponse = { url: '' };

const initialState: ExportsState = {
  responses: {
    'work-orders': initialExportResponse
  },
  loadingExport: false
};

const slice = createSlice({
  name: 'parts',
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
      action: PayloadAction<{ loading: boolean }>
    ) {
      const { loading } = action.payload;
      state.loadingExport = loading;
    }
  }
});

export const reducer = slice.reducer;

export const exportEntity =
  (entity: EntityType): AppThunk =>
  async (dispatch) => {
    dispatch(slice.actions.setLoading({ loading: true }));
    try {
      const response = await api.get<{ success: boolean; message: string }>(
        `${basePath}/${entity}`
      );
      dispatch(slice.actions.exportEntity({ url: response.message, entity }));
    } finally {
      dispatch(slice.actions.setLoading({ loading: false }));
    }
  };

export default slice;
