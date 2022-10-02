import React, { useState, useEffect, Children } from "react";
import { useParams } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getBookAction } from "../actions/book/getBookAction";

function ShowBookPage() {
  let { id } = useParams();

  const dispatch = useDispatch();
  // getting token
  const books = useSelector((state) => state.books.books);
  let book = books.find((book) => book.id == id);

  return (
    <>
      {book && (
        <div className="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 my-6">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            {book.title}
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            {book.author}
          </p>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            {book.year_published}
          </p>
          <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <div className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-200">
              {book.genre.name}
            </div>
          </div>
          <div>
            <p
              href="#"
              className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
            >
              {book.created_at}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowBookPage;
