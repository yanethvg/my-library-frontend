import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/basic/PrivateRoute";
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import BookPage from './pages/BookPage';

const routes = [
  {
    path: "/books",
    element: <BookPage />,
    text: 'Books',
    permission: "books.index",
  },
];

function Routers() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />}></Route>
      <Route path="login" exact element={<LoginPage />}></Route>
      {routes.map((route, index) => {
          return <Route
            key={index}
            path={route.path}
            exact
            element={<PrivateRoute permission={route.permission}/>}
          >
             <Route path={route.path} element={route.element}/>
          </Route>
        } )}
    </Routes>
  );
}

export { Routers, routes };
