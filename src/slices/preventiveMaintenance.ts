import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import PreventiveMaintenance, {
  PreventiveMaintenancePost
} from '../models/owns/preventiveMaintenance';
import api from '../utils/api';
import Schedule from '../models/owns/schedule';

interface PreventiveMaintenanceState {
  preventiveMaintenances: PreventiveMaintenance[];
  loadingGet: boolean;
}

const initialState: PreventiveMaintenanceState = {
  preventiveMaintenances: [],
  loadingGet: false
};
const basePath = 'preventive-maintenances';
const slice = createSlice({
  name: 'preventiveMaintenance',
  initialState,
  reducers: {
    getPreventiveMaintenances(
      state: PreventiveMaintenanceState,
      action: PayloadAction<{ preventiveMaintenances: PreventiveMaintenance[] }>
    ) {
      const { preventiveMaintenances } = action.payload;
      state.preventiveMaintenances = preventiveMaintenances;
    },
    addPreventiveMaintenance(
      state: PreventiveMaintenanceState,
      action: PayloadAction<{ preventiveMaintenance: PreventiveMaintenance }>
    ) {
      const { preventiveMaintenance } = action.payload;
      state.preventiveMaintenances = [
        ...state.preventiveMaintenances,
        preventiveMaintenance
      ];
    },
    editPreventiveMaintenance(
      state: PreventiveMaintenanceState,
      action: PayloadAction<{ preventiveMaintenance: PreventiveMaintenance }>
    ) {
      const { preventiveMaintenance } = action.payload;
      state.preventiveMaintenances = state.preventiveMaintenances.map(
        (preventiveMaintenance1) => {
          if (preventiveMaintenance1.id === preventiveMaintenance.id) {
            return preventiveMaintenance;
          }
          return preventiveMaintenance1;
        }
      );
    },
    patchSchedule(
      state: PreventiveMaintenanceState,
      action: PayloadAction<{ schedule: Schedule; pmId: number }>
    ) {
      const { schedule, pmId } = action.payload;
      state.preventiveMaintenances = state.preventiveMaintenances.map(
        (preventiveMaintenance) => {
          if (preventiveMaintenance.id === pmId) {
            return { ...preventiveMaintenance, schedule };
          }
          return preventiveMaintenance;
        }
      );
    },
    deletePreventiveMaintenance(
      state: PreventiveMaintenanceState,
      action: PayloadAction<{ id: number }>
    ) {
      const { id } = action.payload;
      const preventiveMaintenanceIndex = state.preventiveMaintenances.findIndex(
        (preventiveMaintenance) => preventiveMaintenance.id === id
      );
      state.preventiveMaintenances.splice(preventiveMaintenanceIndex, 1);
    },
    setLoadingGet(
      state: PreventiveMaintenanceState,
      action: PayloadAction<{ loading: boolean }>
    ) {
      const { loading } = action.payload;
      state.loadingGet = loading;
    }
  }
});

export const reducer = slice.reducer;

export const getPreventiveMaintenances = (): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoadingGet({ loading: true }));
  const preventiveMaintenances = await api.get<PreventiveMaintenance[]>(
    basePath
  );
  dispatch(slice.actions.getPreventiveMaintenances({ preventiveMaintenances }));
  dispatch(slice.actions.setLoadingGet({ loading: false }));
};

export const addPreventiveMaintenance =
  (preventiveMaintenance: Partial<PreventiveMaintenancePost>): AppThunk =>
  async (dispatch) => {
    const preventiveMaintenanceResponse = await api.post<PreventiveMaintenance>(
      basePath,
      preventiveMaintenance
    );
    dispatch(
      slice.actions.addPreventiveMaintenance({
        preventiveMaintenance: preventiveMaintenanceResponse
      })
    );
  };
export const editPreventiveMaintenance =
  (id: number, preventiveMaintenance): AppThunk =>
  async (dispatch) => {
    const preventiveMaintenanceResponse =
      await api.patch<PreventiveMaintenance>(
        `${basePath}/${id}`,
        preventiveMaintenance
      );
    dispatch(
      slice.actions.editPreventiveMaintenance({
        preventiveMaintenance: preventiveMaintenanceResponse
      })
    );
  };
export const patchSchedule =
  (scheduleId: number, pmId: number, schedule: Partial<Schedule>): AppThunk =>
  async (dispatch) => {
    const scheduleResponse = await api.patch<Schedule>(
      `schedules/${scheduleId}`,
      schedule
    );
    dispatch(
      slice.actions.patchSchedule({
        pmId,
        schedule: scheduleResponse
      })
    );
  };
export const deletePreventiveMaintenance =
  (id: number): AppThunk =>
  async (dispatch) => {
    const preventiveMaintenanceResponse = await api.deletes<{
      success: boolean;
    }>(`${basePath}/${id}`);
    const { success } = preventiveMaintenanceResponse;
    if (success) {
      dispatch(slice.actions.deletePreventiveMaintenance({ id }));
    }
  };

export default slice;
