import {
    START_GET_ROLES,
    COMPLETE_GET_ROLES,
    ERROR_GET_ROLES,
  } from "../types/role";
  
  const initialState = {
    roles: [],
    error: null,
    loading: false,
    messageError: null
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case START_GET_ROLES:
        return {
          ...state,
          error: null,
          loading: true,
        };
      case COMPLETE_GET_ROLES:
        return {
          ...state,
          roles: action.payload.data,
          error: null,
          loading: false
        };
      case ERROR_GET_ROLES:
        return {
          ...state,
          roles: [],
          error: null,
          loading: false,
          messageError: action.payload,
        };
      default:
        return state;
    }
  }
  