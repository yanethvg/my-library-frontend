import { START_GET_STUDENTS, COMPLETE_GET_STUDENTS, ERROR_GET_STUDENTS } from "../../types/student";
import { Axios } from "../../config/Axios";

export function getStudentsAction(token,page,search) {
  return async (dispatch) => {
    dispatch(start());
    const axios = Axios(token);
    try {
      const response = await axios.get(`/students?page=${page}&search=${search}`);
      dispatch(complete(response.data));
    } catch (err) {
      dispatch(error(err.response.data));
    }
  };
}

export const start = () => ({
  type: START_GET_STUDENTS,
});

export const complete = (data) => ({
  type: COMPLETE_GET_STUDENTS,
  payload: data,
});

export const error = (error) => ({
  type: ERROR_GET_STUDENTS,
  payload: error,
});