import { configureStore } from "@reduxjs/toolkit";
import { shippingDetailsSliceReducer } from "./slice/shippingDetailsSlice";

const store = configureStore({
  reducer: {
    shippingDetails: shippingDetailsSliceReducer,
  },
});

export default store;
