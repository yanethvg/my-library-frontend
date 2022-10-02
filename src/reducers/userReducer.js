import {
  START_GET_USERS,
  COMPLETE_GET_USERS,
  ERROR_GET_USERS,
  START_CREATE_USER,
  COMPLETE_CREATE_USER,
  ERROR_CREATE_USER,
} from "../types/user";

const initialState = {
  users: [],
  error: null,
  loading: false,
  messageError: null,
  pages: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_GET_USERS:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case COMPLETE_GET_USERS:
      return {
        ...state,
        users: action.payload.data,
        error: null,
        loading: false,
        pages: action.payload.meta.last_page,
      };
    case ERROR_GET_USERS:
      return {
        ...state,
        users: [],
        error: null,
        loading: false,
        messageError: action.payload,
      };
    case START_CREATE_USER:
        return {
            ...state,
            error: null,
            loading: true,
        };
    case COMPLETE_CREATE_USER:
        return {
            ...state,
            users: [action.payload.data,...state.users],
            error: null,
            loading: false,
        };
    case ERROR_CREATE_USER:
        return {
            ...state,
            error: action.payload.errors,
            loading: false,
            messageError: action.payload,
        };
    default:
      return state;
  }
}
