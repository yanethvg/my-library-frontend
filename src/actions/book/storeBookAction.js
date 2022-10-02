import {
  START_CREATE_BOOK,
  COMPLETE_CREATE_BOOK,
  ERROR_CREATE_BOOK,
} from "../../types/book";
import { Axios } from "../../config/Axios";
import { notify } from "../../components/basic/Notify";

export function storeBookAction(token, book) {
  return async (dispatch) => {
    dispatch(start());
    const axios = Axios(token);
    try {
      const response = await axios.post(`/books`, book);
      dispatch(complete(response.data));
      notify("Created Book Successfully", "success");
    } catch (err) {
      dispatch(error(err.response.data));
      notify(err.response.data.message, "error");
    }
  };
}

export const start = () => ({
  type: START_CREATE_BOOK,
});

export const complete = (data) => ({
  type: COMPLETE_CREATE_BOOK,
  payload: data,
});

export const error = (error) => ({
  type: ERROR_CREATE_BOOK,
  payload: error,
});
