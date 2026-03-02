import React, {  useRef, useState } from "react";
import Header from "./Header";
import netflixImg from "../assets/images/netflix.webp";
import { checkValidData } from "../utils/checkValidData";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonCLick=()=>{
    //validate the form

    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
  }

  return (
    <div className="relative h-screen">
      <Header />

      <img
        src={netflixImg}
        alt="netflix"
        className="absolute w-full h-full object-cover -z-10"
      />

      <div className="flex justify-center items-center h-full">
        <form onSubmit={(e)=> e.preventDefault()}className="bg-black bg-opacity-80 p-8 w-3/12 text-white rounded-md ">
          <h1 className="text-2xl mb-6">
            {isSignInForm ? "Sign In" : "Sign up"}
          </h1>

          {!isSignInForm && <input
            type="text"
            placeholder="Fullname"
            name=""
            id=""
            className="w-full p-2 mb-4 bg-[#333333] text-sm rounded"
          />}
          <input
          ref = {email}
            type="text"
            placeholder="email"
            name=""
            id=""
            className="w-full p-2 mb-4 bg-[#333333] text-sm rounded"
          />

          <input
          ref = {password}
            type="password"
            placeholder="password"
            name=""
            id=""
            className="w-full p-2 mb-4 bg-[#333333] text-sm rounded"
          />
          <button onClick={handleButtonCLick}
            className="w-full bg-red-600 p-2 my-4 rounded font-semibold"
          >
            {isSignInForm ? "Sign In" : "Sign up"}
          </button>
          <p onClick={toggleForm} className=" cursor-pointer">
            {isSignInForm?"New to netflix? sign up":"already have an account? sign in"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
