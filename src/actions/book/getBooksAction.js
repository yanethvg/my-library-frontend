import { START_GET_BOOKS, COMPLETE_GET_BOOKS, ERROR_GET_BOOKS } from "../../types/book";
import { Axios } from "../../config/Axios";

export function getBooksAction(token,page,title,author, genre) {
  return async (dispatch) => {
    dispatch(start());
    const axios = Axios(token);
    try {
      const response = await axios.get(`/books?page=${page}&title=${title}&author=${author}&genre=${genre}`);
      dispatch(complete(response.data));
      console.log(response.data);
    } catch (err) {
      dispatch(error(err.response.data));
    }
  };
}

export const start = () => ({
  type: START_GET_BOOKS,
});

export const complete = (data) => ({
  type: COMPLETE_GET_BOOKS,
  payload: data,
});

export const error = (error) => ({
  type: ERROR_GET_BOOKS,
  payload: error,
});
