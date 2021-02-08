import { combineReducers, createStore } from "redux";
import { modalReducer } from "./modalRedux";
import { checkoutReducer } from "./checkoutRedux";

const rootReducer = combineReducers({
  modal: modalReducer,
  checkout: checkoutReducer,
});

export const store = createStore(rootReducer);