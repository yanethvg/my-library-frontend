import { START_RETURN_BOOK, COMPLETE_RETURN_BOOK, ERROR_RETURN_BOOK } from "../../types/book";
import { Axios } from "../../config/Axios";
import { notify } from "../../components/basic/Notify";

export function returnAction(token,book_id, user_id) {
  return async (dispatch) => {
    dispatch(start());
    const axios = Axios(token);
    try {
      const response = await axios.post(`/books/${book_id}/students/${user_id}/return`);
      dispatch(complete(response.data.book));
      notify(response.data.message, "success");
    } catch (err) {
      dispatch(error(err.response.data));
      notify(err.response.data.message, "error");
    }
  };
}

export const start = () => ({
  type: START_RETURN_BOOK,
});

export const complete = (data) => ({
  type: COMPLETE_RETURN_BOOK,
  payload: data,
});

export const error = (error) => ({
  type: ERROR_RETURN_BOOK,
  payload: error,
});
