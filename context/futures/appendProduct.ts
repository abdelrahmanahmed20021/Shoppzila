import { createSlice } from "@reduxjs/toolkit";

import { productDelete, productSetter } from "../actions/action.append";
import { appendProductType } from "../types/appendProductType";

export const initialState = [] as appendProductType[];

export const appendProduct = createSlice({
  name: "appendProduct",
  initialState,
  reducers: {
    setProduct: productSetter,
    delProducts: productDelete,
  },
});

export const { setProduct, delProducts } = appendProduct.actions;
export default appendProduct.reducer;
