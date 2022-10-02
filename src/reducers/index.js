import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import BookReducer from "./BookReducer";
import GenreReducer from "./GenreReducer";
import StudentReducer from "./studentReducer";

export default combineReducers({
  auth: LoginReducer,
  books: BookReducer,
  genres: GenreReducer,
  students: StudentReducer,
});