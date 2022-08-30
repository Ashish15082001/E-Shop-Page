import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibility: false,
  modalType: null,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    hideModal(state) {
      state.modalType = null;
      state.visibility = false;
    },
    showModal(state, action) {
      const { modalType } = action.payload;
      state.visibility = true;
      state.modalType = modalType;
    },
  },
});

export const modalSliceReducer = modalSlice.reducer;
export const { showModal, hideModal } = modalSlice.actions;
