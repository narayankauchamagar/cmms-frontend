import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import { OwnUser as User, UserMiniDTO } from '../models/user';
import api from '../utils/api';

interface UserState {
  users: User[];
  usersMini: UserMiniDTO[];
}

const initialState: UserState = {
  users: [],
  usersMini: []
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers(state: UserState, action: PayloadAction<{ users: User[] }>) {
      const { users } = action.payload;
      state.users = users;
    },
    getSingleUser(
      state: UserState,
      action: PayloadAction<{ user: User; id: number }>
    ) {
      const { user, id } = action.payload;
      const index = state.usersMini.findIndex((user1) => user1.id === id);
      if (index !== -1) {
        state.usersMini[index] = user;
      } else state.usersMini.push(user);
    },
    getUsersMini(
      state: UserState,
      action: PayloadAction<{ users: UserMiniDTO[] }>
    ) {
      const { users } = action.payload;
      state.usersMini = users;
    },
    addUser(state: UserState, action: PayloadAction<{ user: User }>) {
      const { user } = action.payload;
      state.users = [...state.users, user];
    },
    editUser(state: UserState, action: PayloadAction<{ user: User }>) {
      const { user } = action.payload;
      state.users = state.users.map((user1) => {
        if (user1.id === user.id) {
          return user;
        }
        return user1;
      });
    },
    deleteUser(state: UserState, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === id);
      state.users.splice(userIndex, 1);
    }
  }
});

export const reducer = slice.reducer;

export const getUsers = (): AppThunk => async (dispatch) => {
  const users = await api.get<User[]>('users');
  dispatch(slice.actions.getUsers({ users }));
};
export const getSingleUser =
  (id: number): AppThunk =>
  async (dispatch) => {
    const user = await api.get<User>(`users/${id}`);
    dispatch(slice.actions.getSingleUser({ user, id }));
  };
export const getUsersMini = (): AppThunk => async (dispatch) => {
  const users = await api.get<UserMiniDTO[]>('users/mini');
  dispatch(slice.actions.getUsersMini({ users }));
};
export const addUser =
  (user): AppThunk =>
  async (dispatch) => {
    const userResponse = await api.post<User>('users', user);
    dispatch(slice.actions.addUser({ user: userResponse }));
  };
export const editUser =
  (id: number, user): AppThunk =>
  async (dispatch) => {
    const userResponse = await api.patch<User>(`users/${id}`, user);
    dispatch(slice.actions.editUser({ user: userResponse }));
  };
export const deleteUser =
  (id: number): AppThunk =>
  async (dispatch) => {
    const userResponse = await api.deletes<{ success: boolean }>(`users/${id}`);
    const { success } = userResponse;
    if (success) {
      dispatch(slice.actions.deleteUser({ id }));
    }
  };

export const inviteUsers =
  (roleId: number, emails: string[]): AppThunk =>
  async (dispatch) => {
    const successResponse = await api.post<{ success: boolean }>(
      'users/invite',
      {
        role: { id: roleId },
        emails
      }
    );
  };
export default slice;
