import { PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "../futures/appendProduct";
import { appendProductType } from "../types/appendProductType";

export const productSetter = (
  state: appendProductType[],
  action: PayloadAction<appendProductType>
) => {
  return [...state, action.payload];
};
export const productRest = (
  state: appendProductType,
  action: PayloadAction
) => {
  return { ...initialState };
};

export const productDelete = (
  state: appendProductType[],
  action: PayloadAction<appendProductType[]>
) => {
  return [...action.payload];
};
