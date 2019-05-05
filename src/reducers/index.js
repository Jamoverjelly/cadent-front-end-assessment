import { combineReducers } from "redux";
import groceries from "../ducks/groceries";

const rootReducer = combineReducers({
  groceries
});

export default rootReducer;
