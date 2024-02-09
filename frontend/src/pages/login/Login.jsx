import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full max-w-md p-6 rounded-3xl shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
          Login
          <span className="text-white bg-blue-500 rounded-md p-2">Chat</span>
        </h1>
        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text "> Username </span>
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full input input-bordered h-10 "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text "> Password </span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full input input-bordered h-10 "
            />
          </div>
          <a
            href=""
            className="text-lg text-blue-200 hover:text-white inline-block"
          >
            Don't have an account?
          </a>
          <button className="btn btn-block btn-sm mt-4 bg-blue-500">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
