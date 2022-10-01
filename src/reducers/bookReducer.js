import {
    START_GET_BOOKS,
    COMPLETE_GET_BOOKS,
    ERROR_GET_BOOKS,
  } from "../types/book";
  
  const initialState = {
    books: [],
    error: null,
    loading: false,
    messageError: null,
    pages: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case START_GET_BOOKS:
        return {
          ...state,
          error: null,
          loading: true,
        };
      case COMPLETE_GET_BOOKS:
        return {
          ...state,
          books: action.payload.data,
          error: null,
          loading: false,
          pages: action.payload.meta.last_page,
        };
      case ERROR_GET_BOOKS:
        return {
          ...state,
          books: [],
          error: null,
          loading: false,
          messageError: action.payload,
        };
      default:
        return state;
    }
  }