import { combineReducers } from "redux";
import { reducer, listReducer } from "./reducer";

const rootReducer = combineReducers({
  details: reducer,
  cards: listReducer,
});

export default rootReducer;
