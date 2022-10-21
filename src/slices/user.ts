import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import { OwnUser as User } from '../models/user';
import api from '../utils/api';

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: []
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers(state: UserState, action: PayloadAction<{ users: User[] }>) {
      const { users } = action.payload;
      state.users = users;
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

export default slice;