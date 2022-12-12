import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import { Vendor, VendorMiniDTO } from '../models/owns/vendor';
import api from '../utils/api';

interface VendorState {
  vendors: Vendor[];
  vendorsMini: VendorMiniDTO[];
  loadingGet: boolean;
}

const initialState: VendorState = {
  vendors: [],
  vendorsMini: [],
  loadingGet: false
};

const slice = createSlice({
  name: 'vendors',
  initialState,
  reducers: {
    getVendors(
      state: VendorState,
      action: PayloadAction<{ vendors: Vendor[] }>
    ) {
      const { vendors } = action.payload;
      state.vendors = vendors;
    },
    getVendorsMini(
      state: VendorState,
      action: PayloadAction<{ vendors: VendorMiniDTO[] }>
    ) {
      const { vendors } = action.payload;
      state.vendorsMini = vendors;
    },
    addVendor(state: VendorState, action: PayloadAction<{ vendor: Vendor }>) {
      const { vendor } = action.payload;
      state.vendors = [...state.vendors, vendor];
    },
    editVendor(state: VendorState, action: PayloadAction<{ vendor: Vendor }>) {
      const { vendor } = action.payload;
      state.vendors = state.vendors.map((vendor1) => {
        if (vendor1.id === vendor.id) {
          return vendor;
        }
        return vendor1;
      });
    },
    deleteVendor(state: VendorState, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const vendorIndex = state.vendors.findIndex((vendor) => vendor.id === id);
      state.vendors.splice(vendorIndex, 1);
    },
    setLoadingGet(
      state: VendorState,
      action: PayloadAction<{ loading: boolean }>
    ) {
      const { loading } = action.payload;
      state.loadingGet = loading;
    }
  }
});

export const reducer = slice.reducer;

export const getVendors = (): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoadingGet({ loading: true }));
  const vendors = await api.get<Vendor[]>('vendors');
  dispatch(slice.actions.getVendors({ vendors }));
  dispatch(slice.actions.setLoadingGet({ loading: false }));
};
export const getVendorsMini = (): AppThunk => async (dispatch) => {
  const vendors = await api.get<Vendor[]>('vendors/mini');
  dispatch(slice.actions.getVendorsMini({ vendors }));
};
export const addVendor =
  (vendor): AppThunk =>
  async (dispatch) => {
    const vendorResponse = await api.post<Vendor>('vendors', vendor);
    dispatch(slice.actions.addVendor({ vendor: vendorResponse }));
  };
export const editVendor =
  (id: number, vendor): AppThunk =>
  async (dispatch) => {
    const vendorResponse = await api.patch<Vendor>(`vendors/${id}`, vendor);
    dispatch(slice.actions.editVendor({ vendor: vendorResponse }));
  };
export const deleteVendor =
  (id: number): AppThunk =>
  async (dispatch) => {
    const vendorResponse = await api.deletes<{ success: boolean }>(
      `vendors/${id}`
    );
    const { success } = vendorResponse;
    if (success) {
      dispatch(slice.actions.deleteVendor({ id }));
    }
  };

export default slice;
