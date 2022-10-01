import React, { useState, useEffect, useCallback } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getBooksAction } from "../actions/book/getBooksAction";
//components
import Books from "../components/book/Books";
import CustomPagination from "../components/basic/CustomPagination";

function BookPage() {
  const dispatch = useDispatch();
  // getting token
  const auth = useSelector((state) => state.auth.access);
  // manage pagination and search
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const books = useSelector((state) => state.books.books);
  const total = useSelector((state) => state.books.pages);
  const loading = useSelector((state) => state.books.loading);

  const handleChangePage = useCallback((page) => {
    setPage(page);
  }, []);

  const load = (page, title, author, genre) => {
    dispatch(getBooksAction(auth.access_token, page, title, author, genre));
  };

  useEffect(() => {
    load(page, title, author, genre);
  }, [page, title, author, genre, auth.access_token]);

  return (
    <>
      <div>
        <h1 className="font-bold text-2xl text-blue-900 my-6 text-center">
          Books
        </h1>
        <Books books={books} />
        {total > 1 && loading == false && (
          <div className="d-flex justify-content-center">
            <CustomPagination
              total={total}
              current={page}
              onChangePage={handleChangePage}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default BookPage;
