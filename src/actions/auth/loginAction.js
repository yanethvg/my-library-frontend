import { START_LOGIN, COMPLETE_LOGIN, ERROR_LOGIN } from "../../types/auth";
import axios from "axios";
import { API_URL } from "../../config";
import { notify } from "../../components/basic/Notify";

export function getLogin(user) {
  return async (dispatch) => {
    dispatch(start());
    try {
      const response = await axios.post(`${API_URL}/login`, user);
      dispatch(complete(response.data));
    } catch (err) {
      // if (err.response.data.errors) {
      //   dispatch(error(err.response.data));
      // } 
      notify(err.response.data.message, 'error');
      dispatch(error(err.response.data));
    }
  };
}

export const start = () => ({
  type: START_LOGIN,
});

export const complete = (auth) => ({
  type: COMPLETE_LOGIN,
  payload: auth,
});

export const error = (error) => ({
  type: ERROR_LOGIN,
  payload: error,
});
