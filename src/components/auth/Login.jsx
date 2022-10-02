import React from "react";

const Login = (setEmail, setPassword, clickSubmit, error) => {
  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  className={
                    error?.errors?.email
                      ? "border-red-500 border-2 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                      : "border-2 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  }
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error?.errors && error.errors.email ? (
                   <p className="text-red-500 text-xs italic">
                   {error.errors.email}
                 </p>
                ) : null}
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  className={
                    error?.errors?.password
                      ? "border-red-500 border-2 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                      : "border-2 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  }
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error?.errors && error.errors.password ? (
                  <p className="text-red-500 text-xs italic">
                    {error.errors.password}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={clickSubmit}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
