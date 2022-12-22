import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import api from '../../utils/api';
import { WoOverviewStats } from '../../models/owns/analytics/workOrder/woOverviewStats';

const basePath = 'work-order-analytics';
interface WOStatstate {
  overview: WoOverviewStats;
  loadingStats: boolean;
}

const initialState: WOStatstate = {
  overview: {
    total: 0,
    complete: 0,
    compliant: 0,
    avgCycleTime: 0
  },
  loadingStats: false
};

const slice = createSlice({
  name: 'overviewStats',
  initialState,
  reducers: {
    getStats(
      state: WOStatstate,
      action: PayloadAction<{ overviewStats: WoOverviewStats }>
    ) {
      const { overviewStats } = action.payload;
      state.overview = overviewStats;
    },
    setLoadingGet(
      state: WOStatstate,
      action: PayloadAction<{ loading: boolean }>
    ) {
      const { loading } = action.payload;
      state.loadingStats = loading;
    }
  }
});

export const reducer = slice.reducer;

export const getOverviewStats = (): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoadingGet({ loading: true }));
  const overviewStats = await api.get<WoOverviewStats>(`${basePath}/overview`);
  dispatch(slice.actions.getStats({ overviewStats }));
  dispatch(slice.actions.setLoadingGet({ loading: false }));
};

export default slice;
