import {
  START_GET_BOOKS,
  COMPLETE_GET_BOOKS,
  ERROR_GET_BOOKS,
  START_BORROW_BOOK,
  COMPLETE_BORROW_BOOK,
  ERROR_BORROW_BOOK,
} from "../types/book";

const initialState = {
  books: [],
  error: null,
  loading: false,
  messageError: null,
  pages: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_GET_BOOKS:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case COMPLETE_GET_BOOKS:
      return {
        ...state,
        books: action.payload.data,
        error: null,
        loading: false,
        pages: action.payload.meta.last_page,
      };
    case ERROR_GET_BOOKS:
      return {
        ...state,
        books: [],
        error: null,
        loading: false,
        messageError: action.payload,
      };
    case START_BORROW_BOOK:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case COMPLETE_BORROW_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id == action.payload.id
            ?  action.payload
            : book
        ),
        error: null,
        loading: false,
      };
    case ERROR_BORROW_BOOK:
      return {
        ...state,
        error: null,
        loading: false,
        messageError: action.payload.message,
      };
    default:
      return state;
  }
}
