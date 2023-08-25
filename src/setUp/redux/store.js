import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { reducer, listReducer } from "./reducer";

const initialState = {};

const rootReducer = combineReducers({
  details: reducer,
  cards: listReducer,
});

const store = createStore(rootReducer, initialState);

export default store;
