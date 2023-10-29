import { createSlice } from "@reduxjs/toolkit";

import { InfoRest, InfoSetter } from "../actions/actions.Info";
import { OrderInfoTypes } from "../types/OrderInfoTypes";

export const initialState = {
  color: "",
  size: "",
  count: 0,
} as OrderInfoTypes;

export const OrderInfo = createSlice({
  name: "OrderInfo",
  initialState,
  reducers: {
    setInfo: InfoSetter,
    resetInfo: InfoRest,
  },
});

export const { setInfo, resetInfo } = OrderInfo.actions;
export default OrderInfo.reducer;
