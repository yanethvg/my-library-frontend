import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import BookReducer from "./BookReducer";

export default combineReducers({
  auth: LoginReducer,
  books: BookReducer,
});