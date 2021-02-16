import { combineReducers, createStore } from "redux";
import ads from "./reducers/ads";

export default createStore(combineReducers({
  ads
}));
