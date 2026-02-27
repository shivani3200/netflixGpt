import React from "react";
import Header from "./Header";
import netflixImg from "../assets/images/netflix.webp";

const Login = () => {
  return (
    <div className="relative h-screen">
      <Header />

      <img
        src={netflixImg}
        alt="netflix"
        className="absolute w-full h-full object-cover -z-10"
      />

      <div className="flex justify-center items-center h-full">
        <form className="bg-black bg-opacity-80 p-8 w-3/12 text-white rounded-md ">
  <h1 className="text-2xl mb-6">Sign In</h1>
          <input
            type="text"
            placeholder="email"
            name=""
            id=""
    className="w-full p-2 mb-4 bg-[#333333] text-sm rounded"
          />

          <input
            type="password"
            placeholder="password"
            name=""
            id=""
    className="w-full p-2 mb-4 bg-[#333333] text-sm rounded"
          />
          <button className="w-full bg-red-600 p-2 rounded font-semibold">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
