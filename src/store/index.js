import { rootReducer } from "../reducer/combineReducer";
import { legacy_createStore } from "redux";
export const store = legacy_createStore(rootReducer)