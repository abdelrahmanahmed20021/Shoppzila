import { PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "../futures/orderInfo";
import { OrderInfoTypes } from "../types/OrderInfoTypes";

export const InfoSetter = (
  state: OrderInfoTypes,
  action: PayloadAction<{
    target: keyof OrderInfoTypes;
    value: string | number;
  }>
) => {
  return {
    ...state,
    [action.payload.target]: action.payload.value,
  };
};

export const InfoRest = (state: OrderInfoTypes, action: PayloadAction) => {
  return { ...initialState };
};
