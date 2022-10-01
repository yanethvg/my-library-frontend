import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "./../../Routers";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getLogout } from "../../actions/auth/logoutAction";

function Menu() {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth.access);

  const logout = () => dispatch(getLogout(auth.access_token));

  let permissions = [];
  if (auth) permissions = auth.permissions;

  return (
    <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <NavLink to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-10"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </NavLink>
        {auth && (
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => logout(() => history.push("/"))}
            >
              Logout
            </button>
          </div>
        )}
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className="block py-2 pr-4 pl-3 text-white bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white"
              >
                Home
              </NavLink>
            </li>
            {!auth && (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className="block py-2 pr-4 pl-3 text-white bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
            {auth && (
              <>
                {routes.map(
                  (route) =>
                    permissions.includes(route.permission) && (
                      <li key={route.path}>
                        <NavLink
                          to={route.path}
                          className="block py-2 pr-4 pl-3 text-white bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white"
                        >
                          {route.text}
                        </NavLink>
                      </li>
                    )
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
