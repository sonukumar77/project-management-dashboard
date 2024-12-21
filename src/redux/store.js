import { legacy_createStore } from "redux";
import AuthReducer from "./redcers/AuthReducer";

const myStore = legacy_createStore(AuthReducer);

export default myStore;
