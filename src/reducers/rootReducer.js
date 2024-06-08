import { combineReducers } from "redux";
import { authReducer } from "./Authreducer";

export const rootReducer = combineReducers({
  auth: authReducer,
});