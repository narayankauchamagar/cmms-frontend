import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import File, { FileType } from '../models/owns/file';
import api, { authHeader } from '../utils/api';

const basePath = 'files';
interface FileState {
  files: File[];
  loadingGet: boolean;
}

const initialState: FileState = {
  files: [],
  loadingGet: false
};

const slice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    getFiles(state: FileState, action: PayloadAction<{ files: File[] }>) {
      const { files } = action.payload;
      state.files = files;
    },
    addFile(state: FileState, action: PayloadAction<{ file: File }>) {
      const { file } = action.payload;
      state.files = [...state.files, file];
    },
    addFiles(state: FileState, action: PayloadAction<{ files: File[] }>) {
      const { files } = action.payload;
      state.files = [...state.files, ...files];
    },
    editFile(state: FileState, action: PayloadAction<{ file: File }>) {
      const { file } = action.payload;
      state.files = state.files.map((file1) => {
        if (file1.id === file.id) {
          return file;
        }
        return file1;
      });
    },
    deleteFile(state: FileState, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const fileIndex = state.files.findIndex((file) => file.id === id);
      state.files.splice(fileIndex, 1);
    },
    setLoadingGet(
      state: FileState,
      action: PayloadAction<{ loading: boolean }>
    ) {
      const { loading } = action.payload;
      state.loadingGet = loading;
    }
  }
});

export const reducer = slice.reducer;

export const getFiles = (): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoadingGet({ loading: true }));
  const files = await api.get<File[]>(basePath);
  dispatch(slice.actions.getFiles({ files }));
  dispatch(slice.actions.setLoadingGet({ loading: false }));
};

export const addFiles =
  (files: any[], fileType: FileType = 'OTHER'): AppThunk =>
  async (dispatch) => {
    let formData = new FormData();
    const companyId = localStorage.getItem('companyId');
    const headers = authHeader(false);
    delete headers['Content-Type'];
    files.forEach((file) => formData.append('files', file));
    formData.append('folder', `company ${companyId}`);
    formData.append('type', fileType);
    const filesResponse = await api.post<File[]>(
      `${basePath}/upload`,
      formData,
      {
        headers
      },
      true,
      true
    );
    dispatch(slice.actions.addFiles({ files: filesResponse }));
    return filesResponse.map((file) => file.id);
  };
export const editFile =
  (id: number, file): AppThunk =>
  async (dispatch) => {
    const fileResponse = await api.patch<File>(`${basePath}/${id}`, file);
    dispatch(slice.actions.editFile({ file: fileResponse }));
  };
export const deleteFile =
  (id: number): AppThunk =>
  async (dispatch) => {
    const fileResponse = await api.deletes<{ success: boolean }>(
      `${basePath}/${id}`
    );
    const { success } = fileResponse;
    if (success) {
      dispatch(slice.actions.deleteFile({ id }));
    }
  };

export default slice;
