import { configureStore } from "@reduxjs/toolkit";
import { modalSliceReducer } from "./slice/modalSlice";
import { shippingDetailsSliceReducer } from "./slice/shippingDetailsSlice";

const store = configureStore({
  reducer: {
    shippingDetails: shippingDetailsSliceReducer,
    modal: modalSliceReducer,
  },
});

export default store;
