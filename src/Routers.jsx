import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

const routes = [
  {
    path: "/about",
    exact: true,
    element: <About />,
  },
];

function Routers() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact
            element={route.element}
          ></Route>
        );
      })}
    </Routes>
  );
}

export { Routers, routes };
