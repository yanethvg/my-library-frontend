import { combineReducers } from "redux";
import LoginReducer from "./loginReducer";
import BookReducer from "./bookReducer";
import GenreReducer from "./genreReducer";
import StudentReducer from "./studentReducer";
import roleReducer from "./roleReducer";
import UserReducer from "./userReducer";

export default combineReducers({
  auth: LoginReducer,
  books: BookReducer,
  genres: GenreReducer,
  students: StudentReducer,
  roles: roleReducer,
  users: UserReducer,
});