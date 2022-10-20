import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import Asset from '../models/owns/asset';
import api from '../utils/api';

interface AssetState {
  assets: Asset[];
}

const initialState: AssetState = {
  assets: []
};

const slice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    getAssets(state: AssetState, action: PayloadAction<{ assets: Asset[] }>) {
      const { assets } = action.payload;
      state.assets = assets;
    },
    addAsset(state: AssetState, action: PayloadAction<{ asset: Asset }>) {
      const { asset } = action.payload;
      state.assets = [...state.assets, asset];
    },
    editAsset(state: AssetState, action: PayloadAction<{ asset: Asset }>) {
      const { asset } = action.payload;
      state.assets = state.assets.map((asset1) => {
        if (asset1.id === asset.id) {
          return asset;
        }
        return asset1;
      });
    },
    deleteAsset(state: AssetState, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const assetIndex = state.assets.findIndex((asset) => asset.id === id);
      state.assets.splice(assetIndex, 1);
    }
  }
});

export const reducer = slice.reducer;

export const getAssets = (): AppThunk => async (dispatch) => {
  const assets = await api.get<Asset[]>('assets');
  dispatch(slice.actions.getAssets({ assets }));
};

export const addAsset =
  (asset): AppThunk =>
  async (dispatch) => {
    const assetResponse = await api.post<Asset>('assets', asset);
    dispatch(slice.actions.addAsset({ asset: assetResponse }));
  };
export const editAsset =
  (id: number, asset): AppThunk =>
  async (dispatch) => {
    const assetResponse = await api.patch<Asset>(`assets/${id}`, asset);
    dispatch(slice.actions.editAsset({ asset: assetResponse }));
  };
export const deleteAsset =
  (id: number): AppThunk =>
  async (dispatch) => {
    const assetResponse = await api.deletes<{ success: boolean }>(
      `assets/${id}`
    );
    const { success } = assetResponse;
    if (success) {
      dispatch(slice.actions.deleteAsset({ id }));
    }
  };

export default slice;
