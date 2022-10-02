import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import BookReducer from "./BookReducer";
import GenreReducer from "./GenreReducer";
import StudentReducer from "./studentReducer";
import roleReducer from "./roleReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
  auth: LoginReducer,
  books: BookReducer,
  genres: GenreReducer,
  students: StudentReducer,
  roles: roleReducer,
  users: UserReducer,
});