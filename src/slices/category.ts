import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import Category from '../models/owns/category';
import api from '../utils/api';

interface CategoryState {
  categories: Category[];
}

const initialState: CategoryState = {
  categories: []
};

const slice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories(
      state: CategoryState,
      action: PayloadAction<{ categories: Category[] }>
    ) {
      const { categories } = action.payload;
      state.categories = categories;
    },
    addCategory(
      state: CategoryState,
      action: PayloadAction<{ category: Category }>
    ) {
      const { category } = action.payload;
      state.categories = [...state.categories, category];
    },
    editCategory(
      state: CategoryState,
      action: PayloadAction<{ category: Category }>
    ) {
      const { category } = action.payload;
      state.categories = state.categories.map((category1) => {
        if (category1.id === category.id) {
          return category;
        }
        return category1;
      });
    },
    deleteCategory(
      state: CategoryState,
      action: PayloadAction<{ id: number }>
    ) {
      const { id } = action.payload;
      const categoryIndex = state.categories.findIndex(
        (category) => category.id === id
      );
      state.categories.splice(categoryIndex, 1);
    }
  }
});

export const reducer = slice.reducer;

export const getCategories =
  (basePath): AppThunk =>
  async (dispatch) => {
    const categories = await api.get<Category[]>(basePath);
    dispatch(slice.actions.getCategories({ categories }));
  };

export const addCategory =
  (category, basePath): AppThunk =>
  async (dispatch) => {
    const categoryResponse = await api.post<Category>(basePath, category);
    dispatch(slice.actions.addCategory({ category: categoryResponse }));
  };
export const editCategory =
  (id: number, category, basePath): AppThunk =>
  async (dispatch) => {
    const categoryResponse = await api.patch<Category>(
      `${basePath}/${id}`,
      category
    );
    dispatch(slice.actions.editCategory({ category: categoryResponse }));
  };
export const deleteCategory =
  (id: number, basePath): AppThunk =>
  async (dispatch) => {
    const categoryResponse = await api.deletes<{ success: boolean }>(
      `${basePath}/${id}`
    );
    const { success } = categoryResponse;
    if (success) {
      dispatch(slice.actions.deleteCategory({ id }));
    }
  };

export default slice;
