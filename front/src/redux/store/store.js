import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import fileReducer from "../reducers/fileReducer";

const store = createStore(fileReducer, applyMiddleware(thunk));

export default store;