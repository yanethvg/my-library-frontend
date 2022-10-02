import React, { useState, useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getRolesAction } from "../actions/role/getRolesAction";
import { storeUserAction } from "../actions/user/storeUserAction";

function CreateUserPage() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role_id: "",
  });

  //redux
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth.access);
  const roles = useSelector((state) => state.roles.roles);
  const error = useSelector((state) => state.users.error);

  const loadRoles = () => {
    dispatch(getRolesAction(auth.access_token));
  };

  useEffect(() => {
    loadRoles();
  }, [auth.access_token]);
  //onChange={(e) => handleChange(e)}

  const create = (token, book) => dispatch(storeUserAction(token, book));

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    let data = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      password_confirmation: user.password,
      role_id: parseInt(user.role_id),
    };
    create(auth.access_token, data);
  };

  return (
    <>
      <h1 className="font-bold text-2xl text-blue-900 my-6 text-center">
        Create User
      </h1>
      <form className="w-full ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              className={
                error?.first_name
                  ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  : "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              }
              id="first_name"
              type="text"
              placeholder="Enter First Name"
              onChange={(e) => handleChange(e)}
            />
            {error && error?.first_name ? (
              <p className="text-red-500 text-xs italic">{error.first_name}</p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              className={
                error?.last_name
                  ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  : "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              }
              id="last_name"
              type="text"
              placeholder="Enter Last Name"
              onChange={(e) => handleChange(e)}
            />
            {error && error?.last_name ? (
              <p className="text-red-500 text-xs italic">{error.last_name}</p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className={
                error?.email
                  ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  : "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              }
              id="email"
              type="email"
              placeholder="Enter Email"
              onChange={(e) => handleChange(e)}
            />
            {error && error?.email ? (
              <p className="text-red-500 text-xs italic">{error.email}</p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Role
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="role_id"
                onChange={(e) => handleChange(e)}
              >
                <option>Choose Role</option>
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
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
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Password
            </label>
            <input
              className={
                error?.password
                  ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  : "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              }
              id="password"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => handleChange(e)}
            />
            {error && error?.password ? (
              <p className="text-red-500 text-xs italic">{error.password}</p>
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

export default CreateUserPage;
