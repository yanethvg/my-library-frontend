import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/basic/PrivateRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BookPage from "./pages/BookPage";
import StudentBookPage from "./pages/StudentBookPage";
import ShowBookPage from "./pages/ShowBookPage";
import StudentPage from "./pages/StudentPage";
import CheckinPage from "./pages/CheckinPage";
import CreateBookPage from "./pages/CreateBookPage";

const routes = [
  {
    path: "/books",
    element: <BookPage />,
    text: "Books",
    permission: "books.index",
  },
  {
    path: "/my-books",
    element: <StudentBookPage />,
    text: "My Books",
    permission: "students.books",
  },
  {
    path: "/students",
    element: <StudentPage />,
    text: "Students",
    permission: "students.index",
  },
  {
    path: "/create-book",
    element: <CreateBookPage />,
    text: "Create Book",
    permission: "books.store",
  },
];

const routesChild = [
  {
    path: "/books/:id",
    element: <ShowBookPage  />,
    text: "Book",
    permission: "books.show",
  },
  {
    path: "/books-student/:id",
    element: <CheckinPage  />,
    text: "Student Books",
    permission: "books.students",
  }
];

function Routers() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />}></Route>
      <Route path="login" exact element={<LoginPage />}></Route>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact
            element={<PrivateRoute permission={route.permission} />}
          >
            <Route path={route.path} element={route.element} />
          </Route>
        );
      })}
      {routesChild.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact
            element={<PrivateRoute permission={route.permission} />}
          >
            <Route path={route.path} element={route.element} />
          </Route>
        );
      })}
    </Routes>
  );
}

export { Routers, routes };
