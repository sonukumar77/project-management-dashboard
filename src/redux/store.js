import { combineReducers, legacy_createStore } from "redux";
import AuthReducer from "./redcers/AuthReducer";

const myStore = legacy_createStore(
  combineReducers({
    auth: AuthReducer,
  })
);

export default myStore;
