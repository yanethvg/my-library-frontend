import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "./../../Routers";
//redux
import { useDispatch, useSelector } from "react-redux";
// import { getLogout } from "../../actions/auth/logoutAction";

function Menu() {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth.access);

  // const logout = () => dispatch(getLogout(auth.access_token));

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
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {!auth && (
              <>
                <NavLink to="/login">
                  <li className="block py-2 pr-4 pl-3 text-white bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white">
                    Login
                  </li>
                </NavLink>
              </>
            )}
            {auth && (
              <>
               <NavLink to="/">
                  <li className="block py-2 pr-4 pl-3 text-white bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white">
                   Home
                  </li>
                </NavLink>
                {routes.map(
                  (route) =>
                    permissions.includes(route.permission) && (
                      <NavLink to={route.path} key={route.path}>
                        <li className="block py-2 pr-4 pl-3 text-white bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white">
                          {route.text}
                        </li>
                      </NavLink>
                    )
                )}
                {/* <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => logout(() => history.push("/"))}
                >
                  Logout
                </button> */}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
