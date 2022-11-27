import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import Relation from '../models/owns/relation';
import api from '../utils/api';

const basePath = 'relations';
interface RelationState {
  workOrdersRelations: { [id: number]: Relation[] };
}

const initialState: RelationState = {
  workOrdersRelations: {}
};

const slice = createSlice({
  name: 'relations',
  initialState,
  reducers: {
    getRelations(
      state: RelationState,
      action: PayloadAction<{ id: number; relations: Relation[] }>
    ) {
      const { relations, id } = action.payload;
      state.workOrdersRelations[id] = relations;
    },
    createRelation(
      state: RelationState,
      action: PayloadAction<{
        workOrderId: number;
        relation: Relation;
      }>
    ) {
      const { relation, workOrderId } = action.payload;
      if (state.workOrdersRelations[workOrderId]) {
        state.workOrdersRelations[workOrderId].push(relation);
      } else state.workOrdersRelations[workOrderId] = [relation];
    },
    deleteRelation(
      state: RelationState,
      action: PayloadAction<{
        workOrderId: number;
        id: number;
      }>
    ) {
      const { id, workOrderId } = action.payload;
      state.workOrdersRelations[workOrderId] = state.workOrdersRelations[
        workOrderId
      ].filter((relation) => relation.id !== id);
    }
  }
});

export const reducer = slice.reducer;

export const getRelations =
  (id: number): AppThunk =>
  async (dispatch) => {
    const relations = await api.get<Relation[]>(`${basePath}/work-order/${id}`);
    dispatch(slice.actions.getRelations({ id, relations }));
  };

export const createRelation =
  (
    id: number,
    relation: { child: { id: number }; relationType: string }
  ): AppThunk =>
  async (dispatch) => {
    const relationResponse = await api.post<Relation>(`${basePath}`, {
      ...relation,
      parent: { id }
    });
    dispatch(
      slice.actions.createRelation({
        workOrderId: id,
        relation: relationResponse
      })
    );
  };

export const deleteRelation =
  (workOrderId: number, id: number): AppThunk =>
  async (dispatch) => {
    const response = await api.deletes<{ success: boolean }>(
      `${basePath}/${id}`
    );
    const { success } = response;
    if (success) {
      dispatch(slice.actions.deleteRelation({ workOrderId, id }));
    }
  };

export default slice;
