import { configureStore } from "@reduxjs/toolkit";

import appendProduct from "./futures/appendProduct";
import OrderInfo from "./futures/orderInfo";

export const store = configureStore({
  reducer: {
    OrderInfo,
    appendProduct,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
