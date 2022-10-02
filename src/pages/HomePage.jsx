import React from "react";
import { useSelector } from "react-redux";

function HomePage() {
  const auth = useSelector((state) => state.auth.access);
  return (
    <>
      <div className="max-w-screen-lg bg-indigo-500 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
        <h2 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
          Welcome to the Library
        </h2>
        <div className="mt-8 flex justify-center">
          <p>Have a Good Day 
            {auth? 
              <span className="text-indigo-200"> {auth.user.full_name}</span>
              :
              <span className="text-indigo-200"> Guest</span>
          }</p>
         
        </div>
      </div>
    </>
  );
}

export default HomePage;
