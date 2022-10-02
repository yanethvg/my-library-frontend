import {
  START_GET_STUDENTS,
  COMPLETE_GET_STUDENTS,
  ERROR_GET_STUDENTS,
} from "../types/student";

const initialState = {
  students: [],
  error: null,
  loading: false,
  messageError: null,
  pages: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_GET_STUDENTS:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case COMPLETE_GET_STUDENTS:
      return {
        ...state,
        students: action.payload.data,
        error: null,
        loading: false,
        pages: action.payload.meta.last_page,
      };
    case ERROR_GET_STUDENTS:
      return {
        ...state,
        students: [],
        error: null,
        loading: false,
        messageError: action.payload,
      };
    default:
      return state;
  }
}
