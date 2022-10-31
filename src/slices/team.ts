import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import Team from '../models/owns/team';
import api from '../utils/api';

interface TeamState {
  teams: Team[];
}

const initialState: TeamState = {
  teams: []
};

const slice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    getTeams(state: TeamState, action: PayloadAction<{ teams: Team[] }>) {
      const { teams } = action.payload;
      state.teams = teams;
    },
    addTeam(state: TeamState, action: PayloadAction<{ team: Team }>) {
      const { team } = action.payload;
      state.teams = [...state.teams, team];
    },
    editTeam(state: TeamState, action: PayloadAction<{ team: Team }>) {
      const { team } = action.payload;
      state.teams = state.teams.map((team1) => {
        if (team1.id === team.id) {
          return team;
        }
        return team1;
      });
    },
    deleteTeam(state: TeamState, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const teamIndex = state.teams.findIndex((team) => team.id === id);
      state.teams.splice(teamIndex, 1);
    }
  }
});

export const reducer = slice.reducer;

export const getTeams = (): AppThunk => async (dispatch) => {
  const teams = await api.get<Team[]>('teams');
  dispatch(slice.actions.getTeams({ teams }));
};

export const addTeam =
  (team): AppThunk =>
  async (dispatch) => {
    const teamResponse = await api.post<Team>('teams', team);
    dispatch(slice.actions.addTeam({ team: teamResponse }));
  };
export const editTeam =
  (id: number, team): AppThunk =>
  async (dispatch) => {
    const teamResponse = await api.patch<Team>(`teams/${id}`, team);
    dispatch(slice.actions.editTeam({ team: teamResponse }));
  };
export const deleteTeam =
  (id: number): AppThunk =>
  async (dispatch) => {
    const teamResponse = await api.deletes<{ success: boolean }>(`teams/${id}`);
    const { success } = teamResponse;
    if (success) {
      dispatch(slice.actions.deleteTeam({ id }));
    }
  };

export default slice;
