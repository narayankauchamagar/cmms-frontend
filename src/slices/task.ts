import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import api from '../utils/api';
import { Task } from '../models/owns/tasks';

const basePath = 'tasks';
interface TaskState {
  workOrdersRoot2: { [id: number]: Task[] };
}

const initialState: TaskState = {
  workOrdersRoot2: {}
};

const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getTasks(
      state: TaskState,
      action: PayloadAction<{ id: number; tasks: Task[] }>
    ) {
      const { tasks, id } = action.payload;
      state.workOrdersRoot2[id] = tasks;
    },
    createTasks(
      state: TaskState,
      action: PayloadAction<{
        workOrderId: number;
        tasks: Task[];
      }>
    ) {
      const { tasks, workOrderId } = action.payload;
      state.workOrdersRoot2[workOrderId] = tasks;
    },
    deleteTask(
      state: TaskState,
      action: PayloadAction<{
        workOrderId: number;
        id: number;
      }>
    ) {
      const { id, workOrderId } = action.payload;
      state.workOrdersRoot2[workOrderId] = state.workOrdersRoot2[
        workOrderId
      ].filter((task) => task.id !== id);
    }
  }
});

export const reducer = slice.reducer;

export const getTasks =
  (id: number): AppThunk =>
  async (dispatch) => {
    const tasks = await api.get<Task[]>(`${basePath}/work-order/${id}`);
    dispatch(slice.actions.getTasks({ id, tasks }));
  };

export const createTasks =
  (workOrderId: number, taskBases: any[]): AppThunk =>
  async (dispatch) => {
    const tasks = await api.post<Task[]>(
      `${basePath}/work-order/${workOrderId}`,
      taskBases,
      null,
      true
    );
    dispatch(
      slice.actions.createTasks({
        workOrderId,
        tasks
      })
    );
  };

export const deleteTask =
  (workOrderId: number, id: number): AppThunk =>
  async (dispatch) => {
    const response = await api.deletes<{ success: boolean }>(
      `${basePath}/${id}`
    );
    const { success } = response;
    if (success) {
      dispatch(slice.actions.deleteTask({ workOrderId, id }));
    }
  };

export default slice;
