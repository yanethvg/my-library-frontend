import React, {useState, useEffect, useCallback} from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getBooksAction } from "../actions/book/getBooksAction";
//components
import Books from "../components/book/Books";

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

  const handleChangePage = useCallback((page) => {
    setPage(page);
  }, []);

  const load =(page,title, author, genre) => {
    dispatch(getBooksAction(auth.access_token, page, title, author, genre));
  }

  useEffect(() => {
    load(page,title, author, genre);
  }, [page, title, author, genre, auth.access_token]);


  return (
    <>
      <div>
        <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-pink-800 text-center my-6">
          Books
        </h1>
        <Books
          books={books}
        />
      </div>
    </>
  );
}

export default BookPage;
