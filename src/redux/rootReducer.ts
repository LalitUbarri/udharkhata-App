import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import customerReducer from "./slices/customerSlice";
import settingsReducer from "./slices/settingsSlice";
import transactionReducer from "./slices/transactionSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  customers: customerReducer,
  transactions: transactionReducer,
  settings: settingsReducer,
});