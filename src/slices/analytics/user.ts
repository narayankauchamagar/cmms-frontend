import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import api from '../../utils/api';
import { UserWOStats } from '../../models/owns/analytics/user';

const basePath = 'analytics/users';
interface UserStatstate {
  workOrdersOverview: UserWOStats;
  loading: Omit<Record<keyof UserStatstate, boolean>, 'loading'>;
}
type Operation = keyof UserStatstate;

const initialState: UserStatstate = {
  workOrdersOverview: {
    created: 0,
    completed: 0
  },
  loading: {
    workOrdersOverview: false
  }
};

const slice = createSlice({
  name: 'userStats',
  initialState,
  reducers: {
    getWorkOrdersOverview(
      state: UserStatstate,
      action: PayloadAction<{ stats: UserWOStats }>
    ) {
      const { stats } = action.payload;
      state.workOrdersOverview = stats;
    },
    setLoading(
      state: UserStatstate,
      action: PayloadAction<{ loading: boolean; operation: Operation }>
    ) {
      const { loading, operation } = action.payload;
      state.loading[operation] = loading;
    }
  }
});

export const reducer = slice.reducer;

export const getUserWorkOrdersOverview = (): AppThunk => async (dispatch) => {
  dispatch(
    slice.actions.setLoading({
      operation: 'workOrdersOverview',
      loading: true
    })
  );
  const stats = await api.get<UserWOStats>(
    `${basePath}/me/work-orders/overview`
  );
  dispatch(slice.actions.getWorkOrdersOverview({ stats }));
  dispatch(
    slice.actions.setLoading({
      operation: 'workOrdersOverview',
      loading: false
    })
  );
};

export default slice;
