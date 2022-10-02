import React from "react";
import Logo from "../assets/404-error.png";

const PageNotFound = () => {
  return (
    <div className="my-6">
      <h1 className="font-bold text-2xl text-blue-900 my-6 text-center">
        Page Not Found
      </h1>
      <img
        className=" object-center object-fill h-37 w-100 "
        src={Logo}
        style={{ margin: "0 auto" }}
      ></img>
    </div>
  );
};

export default PageNotFound;
