import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-3xl shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
    
          SignUp <span className="text-white bg-blue-500 rounded-md p-2">Chat</span>
        </h1>
        <form >
            <div>
                <label className="label p-2">
                    <span className="text-base label-text "> Full Name </span>
                </label>
                <input type="text" placeholder="Full Name.." className="input input-bordered w-full h-10 " />
            </div>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text "> Username </span>
                </label>
                <input type="text" placeholder="username" className="input input-bordered w-full h-10 " />
            </div>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text "> Password </span>
                </label>
                <input type="text" placeholder="Password" className="input input-bordered w-full h-10 " />
            </div>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text "> Confirm Password </span>
                </label>
                <input type="text" placeholder="Confirm Password" className="input input-bordered w-full h-10 " />
            </div>

            <GenderCheckbox/>
            <a
            href=""
            className="text-lg text-blue-200 hover:text-white inline-block"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700 bg-blue-500">
              Sign Up
            </button>
          </div>
            
        </form>
      </div>
    </div>
  );
};

export default SignUp;
