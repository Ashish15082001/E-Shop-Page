import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  address: "",
  firstName: "",
  city: "",
  lastName: "",
  postalCode: "",
  phoneNumber: "",
  country: "",
  paymentMethod: "",
  deliveryMethod: "",
};

const shippingDetailsSlice = createSlice({
  name: "shippingDetails",
  initialState,
  reducers: {
    setEmail(state, action) {
      const { email } = action.payload;
      state.email = email;
    },
    setAddress(state, action) {
      const { address } = action.payload;
      state.address = address;
    },
    setFirstName(state, action) {
      const { firstName } = action.payload;
      state.firstName = firstName;
    },
    setCity(state, action) {
      const { city } = action.payload;
      state.city = city;
    },
    setLastName(state, action) {
      const { lastName } = action.payload;
      state.lastName = lastName;
    },
    setPostalCode(state, action) {
      const { postalCode } = action.payload;
      state.postalCode = postalCode;
    },
    setPhoneNumber(state, action) {
      const { phoneNumber } = action.payload;
      state.phoneNumber = phoneNumber;
    },
    setCountry(state, action) {
      const { country } = action.payload;
      state.country = country;
    },
    setPaymentMethod(state, action) {
      const { paymentMethod } = action.payload;
      state.paymentMethod = paymentMethod;
    },
    setDeliveryMethod(state, action) {
      const { deliveryMethod } = action.payload;
      state.deliveryMethod = deliveryMethod;
    },
  },
});

export const shippingDetailsSliceReducer = shippingDetailsSlice.reducer;
export const {
  setAddress,
  setCity,
  setCountry,
  setDeliveryMethod,
  setEmail,
  setFirstName,
  setLastName,
  setPaymentMethod,
  setPhoneNumber,
  setPostalCode,
} = shippingDetailsSlice.actions;
