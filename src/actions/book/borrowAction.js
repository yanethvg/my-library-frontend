import { START_BORROW_BOOK, COMPLETE_BORROW_BOOK, ERROR_BORROW_BOOK } from "../../types/book";
import { Axios } from "../../config/Axios";
import { notify } from "../../components/basic/Notify";

export function borrowAction(token,book_id) {
  return async (dispatch) => {
    dispatch(start());
    const axios = Axios(token);
    try {
      const response = await axios.post(`/books/${book_id}/borrow`);
      dispatch(complete(response.data.book));
      notify(response.data.message, "success");
    } catch (err) {
      dispatch(error(err.response.data));
      notify(err.response.data.message, "error");
    }
  };
}

export const start = () => ({
  type: START_BORROW_BOOK,
});

export const complete = (data) => ({
  type: COMPLETE_BORROW_BOOK,
  payload: data,
});

export const error = (error) => ({
  type: ERROR_BORROW_BOOK,
  payload: error,
});
