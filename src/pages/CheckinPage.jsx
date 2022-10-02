import React, {
  useState,
  useEffect,
  useCallback,
  useTransition,
  Suspense,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getBooksStudentAction } from "../actions/student/getBooksStudentAction";
import { getGenresAction } from "../actions/genre/getGenresAction";
import { returnAction } from "../actions/book/returnAction";
//components
import Books from "../components/book/Books";
import CustomPagination from "../components/basic/CustomPagination";
import Loading from "../components/basic/Loading";

function CheckinPage() {
  let { id } = useParams();
  const dispatch = useDispatch();
  // getting token
  const auth = useSelector((state) => state.auth.access);
  const permissions = useSelector((state) => state.auth.access.permissions);

  // manage pagination and search
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const [inTransition, startTransition] = useTransition();

  const books = useSelector((state) => state.books.books);
  const total = useSelector((state) => state.books.pages);
  const loading = useSelector((state) => state.books.loading);
  const genres = useSelector((state) => state.genres.genres);

  const handleChangePage = useCallback((page) => {
    setPage(page);
  }, []);

  const load = (page, title, author, genre) => {
    dispatch(
      getBooksStudentAction(auth.access_token, id, page, title, author, genre)
    );
  };

  const loadGenres = () => {
    dispatch(getGenresAction(auth.access_token));
  };

  const handleReturn = (book_id) => {
    if (confirm("Are you sure you want to return this book?")) {
      const user_id = id;
      dispatch(returnAction(auth.access_token, book_id, user_id));
    }
  };

  const nav = useNavigate();
  const handleShow = (id) => {
    nav(`/books/${id}`);
  };

  useEffect(() => {
    startTransition(() => {
      load(page, title, author, genre);
    });
    loadGenres();
  }, [page, title, author, genre, auth.access_token]);

  return (
    <>
      <div>
        <h1 className="font-bold text-2xl text-blue-900 my-6 text-center">
         Books 
        </h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Enter Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Author
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Enter Author"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Genre
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) => setGenre(e.target.value)}
              >
                <option value="">Choose Genre</option>
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {inTransition && !loading ? (
          <div className="d-flex justify-content-center">
            <Loading type={"spin"} color={"#0000ff"} />
          </div>
        ) : null}
        {books.length > 0 ? (
          <Suspense fallback={<Loading type={"spin"} color={"#0000ff"} />}>
            <Books
              books={books}
              permissions={permissions}
              mine={false}
              handleReturn={handleReturn}
              handleShow={handleShow}
              returned={true}
            />
          </Suspense>
        ) : (
          <div className="d-flex justify-content-center">
            <h1 className="font-bold text-2xl text-blue-900 my-6 text-center">
              No Books Found
            </h1>
          </div>
        )}
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

export default CheckinPage;
