import React, { useState, useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { storeBookAction } from "../actions/book/storeBookAction";
import { getGenresAction } from "../actions/genre/getGenresAction";
//react router dom
import { Navigate } from "react-router-dom";
//componentes

function CreateBookPage() {
  //state
  const [book, setBook] = useState({
    title: "",
    author: "",
    year_published: "",
    genre_id: "",
    stock: 0,
  });
  //redux
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth.access);
  const genres = useSelector((state) => state.genres.genres);
  const error = useSelector((state) => state.books.error);

  const loadGenres = () => {
    dispatch(getGenresAction(auth.access_token));
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setBook({
      ...book,
      [id]: value,
    });
  };

  useEffect(() => {
    loadGenres();
  }, [auth.access_token]);

  const create = (token, book) => dispatch(storeBookAction(token, book));

  const clickSubmit = (e) => {
    e.preventDefault();
    let data = {
      title: book.title,
      author: book.author,
      year_published: book.year_published,
      genre_id: parseInt(book.genre_id),
      stock: parseInt(book.stock),
    };
    create(auth.access_token, data);
  };

  return (
    <>
      <h1 className="font-bold text-2xl text-blue-900 my-6 text-center">
        Create Book
      </h1>
      <form className="w-full ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Title
            </label>
            <input
              className={
                error?.title
                  ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  : "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              }
              id="title"
              type="text"
              placeholder="Enter Title"
              onChange={(e) => handleChange(e)}
            />
            {error && error?.title ? (
              <p className="text-red-500 text-xs italic">{error.title}</p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Author
            </label>
            <input
              className={
                error?.author
                  ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  : "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              }
              id="author"
              type="text"
              placeholder="Enter Author"
              onChange={(e) => handleChange(e)}
            />
            {error && error?.author ? (
              <p className="text-red-500 text-xs italic">{error.author}</p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Genre
            </label>
            <div className="relative">
              <select
                className={
                    error?.genre_id
                      ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      : "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  }
                id="genre_id"
                onChange={(e) => handleChange(e)}
              >
                <option value="">Select Genre</option>
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
                  <path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                </svg>
              </div>
              {
                error && error?.genre_id ? (
                    <p className="text-red-500 text-xs italic">{error.genre_id}</p>
                ) : null
              }
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Year Published
            </label>
            <input
             className={
                error?.year_published
                  ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  : "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              }
              type="text"
              id="year_published"
              placeholder="Enter Year Published"
              onChange={(e) => handleChange(e)}
            />
            {error && error?.year_published ? (
              <p className="text-red-500 text-xs italic">{error.year_published}</p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Stock
            </label>
            <input
             className={
                error?.stock
                  ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  : "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              }
              type="number"
              id="stock"
              onChange={(e) => handleChange(e)}
            />
            {error && error?.stock ? (
              <p className="text-red-500 text-xs italic">{error.stock}</p>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={clickSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateBookPage;
