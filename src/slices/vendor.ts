import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import { Vendor } from '../models/owns/vendor';
import api from '../utils/api';

interface VendorState {
  vendors: Vendor[];
}

const initialState: VendorState = {
  vendors: null
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
    }
  }
});

export const reducer = slice.reducer;

export const getVendors = (): AppThunk => async (dispatch) => {
  const vendors = await api.get<Vendor[]>('vendors');
  dispatch(slice.actions.getVendors({ vendors }));
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
