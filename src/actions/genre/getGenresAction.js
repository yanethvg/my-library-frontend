import { START_GET_GENRES, COMPLETE_GET_GENRES, ERROR_GET_GENRES } from "../../types/genre";
import { Axios } from "../../config/Axios";

export function getGenresAction(token) {
  return async (dispatch) => {
    dispatch(start());
    const axios = Axios(token);
    try {
      const response = await axios.get(`/genres`);
      dispatch(complete(response.data));
    } catch (err) {
      dispatch(error(err.response.data));
    }
  };
}

export const start = () => ({
  type: START_GET_GENRES,
});

export const complete = (data) => ({
  type: COMPLETE_GET_GENRES,
  payload: data,
});

export const error = (error) => ({
  type: ERROR_GET_GENRES,
  payload: error,
});
