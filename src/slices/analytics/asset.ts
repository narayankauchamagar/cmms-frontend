import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import api from '../../utils/api';
import {
  AssetOverviewStats,
  TimeCostByAsset
} from '../../models/owns/analytics/asset';

const basePath = 'analytics/assets';
interface AssetStatstate {
  overview: AssetOverviewStats;
  completeTimeCostByAsset: TimeCostByAsset[];
  loading: Omit<Record<keyof AssetStatstate, boolean>, 'loading'>;
}
type Operation = keyof AssetStatstate;

const initialState: AssetStatstate = {
  completeTimeCostByAsset: [],
  overview: {
    downtime: 0,
    availability: 100,
    downtimeEvents: 0
  },
  loading: {
    completeTimeCostByAsset: false,
    overview: false
  }
};

const slice = createSlice({
  name: 'overviewStats',
  initialState,
  reducers: {
    getWOTimeCostByAsset(
      state: AssetStatstate,
      action: PayloadAction<{ stats: TimeCostByAsset[] }>
    ) {
      const { stats } = action.payload;
      state.completeTimeCostByAsset = stats;
    },
    getOverview(
      state: AssetStatstate,
      action: PayloadAction<{ stats: AssetOverviewStats }>
    ) {
      const { stats } = action.payload;
      state.overview = stats;
    },
    setLoading(
      state: AssetStatstate,
      action: PayloadAction<{ loading: boolean; operation: Operation }>
    ) {
      const { loading, operation } = action.payload;
      state.loading[operation] = loading;
    }
  }
});

export const reducer = slice.reducer;

export const getWOTimeCostByAsset = (): AppThunk => async (dispatch) => {
  dispatch(
    slice.actions.setLoading({
      operation: 'completeTimeCostByAsset',
      loading: true
    })
  );
  const stats = await api.get<TimeCostByAsset[]>(`${basePath}/time-cost`);
  dispatch(slice.actions.getWOTimeCostByAsset({ stats }));
  dispatch(
    slice.actions.setLoading({
      operation: 'completeTimeCostByAsset',
      loading: false
    })
  );
};
export const getAssetOverview = (): AppThunk => async (dispatch) => {
  dispatch(
    slice.actions.setLoading({
      operation: 'overview',
      loading: true
    })
  );
  const stats = await api.get<AssetOverviewStats>(`${basePath}/overview`);
  dispatch(slice.actions.getOverview({ stats }));
  dispatch(
    slice.actions.setLoading({
      operation: 'overview',
      loading: false
    })
  );
};
export default slice;
