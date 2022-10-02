import { START_GET_USERS, COMPLETE_GET_USERS, ERROR_GET_USERS } from "../../types/user";
import { Axios } from "../../config/Axios";

export function getUsersAction(token,page,search) {
  return async (dispatch) => {
    dispatch(start());
    const axios = Axios(token);
    try {
      const response = await axios.get(`/users?page=${page}&search=${search}`);
      dispatch(complete(response.data));
    } catch (err) {
      dispatch(error(err.response.data));
    }
  };
}

export const start = () => ({
  type: START_GET_USERS,
});

export const complete = (data) => ({
  type: COMPLETE_GET_USERS,
  payload: data,
});

export const error = (error) => ({
  type: ERROR_GET_USERS,
  payload: error,
});