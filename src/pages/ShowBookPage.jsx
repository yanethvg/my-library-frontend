import React, { useState, useEffect, Children } from "react";
import { useParams } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getBookAction } from "../actions/book/getBookAction";

function ShowBookPage() {
  let { id } = useParams();

  const dispatch = useDispatch();
  // getting token
  const auth = useSelector((state) => state.auth.access);

  const book = useSelector((state) => state.books.book);

  useEffect(() => {
    dispatch(getBookAction(auth.access_token, id)); 
  }, [id]);


  return (
    <>
      {book && (
        <div className="max-w-screen-lg bg-white shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
          <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
            Title: {book.title}
          </h2>
          <div className="mt-8 flex justify-center">
            <p className=" text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Author: {book.author}
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Stock {book.stock}
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
             Gender: {book.genre?.name}
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
             Gender {book.created_at}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowBookPage;
