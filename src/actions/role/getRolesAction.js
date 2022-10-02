import { START_GET_ROLES, COMPLETE_GET_ROLES, ERROR_GET_ROLES } from "../../types/role";
import { Axios } from "../../config/Axios";

export function getRolesAction(token) {
  return async (dispatch) => {
    dispatch(start());
    const axios = Axios(token);
    try {
      const response = await axios.get(`/roles`);
      dispatch(complete(response.data));
    } catch (err) {
      dispatch(error(err.response.data));
    }
  };
}

export const start = () => ({
  type: START_GET_ROLES,
});

export const complete = (data) => ({
  type: COMPLETE_GET_ROLES,
  payload: data,
});

export const error = (error) => ({
  type: ERROR_GET_ROLES,
  payload: error,
});