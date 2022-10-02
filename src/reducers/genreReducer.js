import {
    START_GET_GENRES,
    COMPLETE_GET_GENRES,
    ERROR_GET_GENRES,
  } from "../types/genre";
  
  const initialState = {
    genres: [],
    error: null,
    loading: false,
    messageError: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case START_GET_GENRES:
        return {
          ...state,
          error: null,
          loading: true,
        };
      case COMPLETE_GET_GENRES:
        return {
          ...state,
          genres: action.payload.data,
          error: null,
          loading: false,
        };
      case ERROR_GET_GENRES:
        return {
          ...state,
          genres: [],
          error: null,
          loading: false,
          messageError: action.payload,
        };
      default:
        return state;
    }
  }