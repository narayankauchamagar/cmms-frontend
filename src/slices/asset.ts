import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import Asset, { AssetDTO, AssetRow } from '../models/owns/asset';
import api from '../utils/api';

const basePath = 'assets';
interface AssetState {
  assets: Asset[];
  assetsHierarchy: AssetRow[];
}

const initialState: AssetState = {
  assets: [],
  assetsHierarchy: []
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
    },
    getAssetChildren(
      state: AssetState,
      action: PayloadAction<{ assets: AssetRow[]; id: number }>
    ) {
      const { assets, id } = action.payload;
      const parent = state.assetsHierarchy.findIndex(
        (asset) => asset.id === id
      );
      if (parent !== -1) state.assetsHierarchy[parent].childrenFetched = true;

      state.assetsHierarchy = assets.reduce((acc, asset) => {
        //check if asset already exists in state
        const assetInState = state.assetsHierarchy.findIndex(
          (asset1) => asset1.id === asset.id
        );
        //not found
        if (assetInState === -1) return [...acc, asset];
        //found
        acc[assetInState] = asset;
        return acc;
      }, state.assetsHierarchy);
    }
  }
});

export const reducer = slice.reducer;

export const getAssets = (): AppThunk => async (dispatch) => {
  const assets = await api.get<Asset[]>(basePath);
  dispatch(slice.actions.getAssets({ assets }));
};

export const addAsset =
  (asset): AppThunk =>
  async (dispatch) => {
    const assetResponse = await api.post<Asset>(basePath, asset);
    dispatch(slice.actions.addAsset({ asset: assetResponse }));
  };
export const editAsset =
  (id: number, asset): AppThunk =>
  async (dispatch) => {
    const assetResponse = await api.patch<Asset>(`${basePath}/${id}`, asset);
    dispatch(slice.actions.editAsset({ asset: assetResponse }));
  };
export const deleteAsset =
  (id: number): AppThunk =>
  async (dispatch) => {
    const assetResponse = await api.deletes<{ success: boolean }>(
      `${basePath}/${id}`
    );
    const { success } = assetResponse;
    if (success) {
      dispatch(slice.actions.deleteAsset({ id }));
    }
  };

export const getAssetChildren =
  (id: number, parents: number[]): AppThunk =>
  async (dispatch) => {
    const assets = await api.get<AssetDTO[]>(`${basePath}/children/${id}`);
    dispatch(
      slice.actions.getAssetChildren({
        id,
        assets: assets.map((asset) => {
          return { ...asset, hierarchy: [...parents, asset.id] };
        })
      })
    );
  };

export default slice;
