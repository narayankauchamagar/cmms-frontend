import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import type { UserResponseDTO } from 'src/models/user';
import { getUserInfos } from '../utils/userApi';

interface UserState {
  user: UserResponseDTO;
}

const initialState: UserState = {
  user: null
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getInfos(
      state: UserState,
      action: PayloadAction<{ user: UserResponseDTO }>
    ) {
      const { user } = action.payload;
      state.user = user;
    }
  }
});

export const reducer = slice.reducer;

export const getInfos = (): AppThunk => async (dispatch) => {
  const user = await getUserInfos();
  dispatch(slice.actions.getInfos({ user }));
};

export default slice;
