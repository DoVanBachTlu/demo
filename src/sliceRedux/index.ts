import { combineReducers } from "redux";
import Authen from "./Authen";
const rootReducer = combineReducers({
  authen: Authen,
});
export default rootReducer;
