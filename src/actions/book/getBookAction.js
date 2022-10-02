import { START_GET_BOOK, COMPLETE_GET_BOOK, ERROR_GET_BOOK } from "../../types/book";
import { Axios } from "../../config/Axios";

export function getBookAction(token,id) {
  return async (dispatch) => {
    dispatch(start());
    const axios = Axios(token);
    try {
      const response = await axios.get(`/books/${id}`);
      dispatch(complete(response.data.data));
    } catch (err) {
      dispatch(error(err.response.data));
    }
  };
}

export const start = () => ({
  type: START_GET_BOOK,
});

export const complete = (data) => ({
  type: COMPLETE_GET_BOOK,
  payload: data,
});

export const error = (error) => ({
  type: ERROR_GET_BOOK,
  payload: error,
});
