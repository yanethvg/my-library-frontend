import { START_LOGOUT, COMPLETE_LOGOUT, ERROR_LOGOUT } from "../../types/auth";
import { Axios } from "../../config/Axios";

export function getLogout(token) {
  return async (dispatch) => {
    dispatch(start());
    const axios = Axios(token);
    try {
      const response = await axios.post(`/logout`);
      dispatch(complete(response.data));
    } catch (err) {
      dispatch(error(err.response.data));
    }
  };
}

export const start = () => ({
  type: START_LOGOUT,
});

export const complete = (auth) => ({
  type: COMPLETE_LOGOUT,
  payload: auth,
});

export const error = (error) => ({
  type: ERROR_LOGOUT,
  payload: error,
});
