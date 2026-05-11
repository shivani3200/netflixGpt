import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import netflixImg from "../assets/images/netflix.webp";
import { checkValidData } from "../utils/checkValidData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (email.current) {
        email.current.value = "";
      }
      if (password.current) {
        password.current.value = "";
      }
    }, 100);
  }, []);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonCLick = () => {
    //validate the form
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return; //agr valid nhi h to return kr jao nhi to sign in sign up kro

    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/123661346?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
          console.log(email.current.value);
          console.log(password.current.value);
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    }
  };

  return (
    <div className="relative h-screen">
      <Header />

      <img
        src={netflixImg}
        alt="netflix"
        className="absolute w-full h-full object-cover -z-10"
      />

      <div className="flex justify-center items-center h-full">
        <form
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-80 p-8 w-3/12 text-white rounded-md "
        >
          <h1 className="text-2xl mb-6">
            {isSignInForm ? "Sign In" : "Sign up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Fullname"
              name=""
              id=""
              className="w-full p-2 mb-4 bg-[#333333] text-sm rounded"
              defaultValue=""
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="email"
            name="user_email"
            id=""
            className="w-full p-2 mb-4 bg-[#333333] text-sm rounded"
            defaultValue=""
          />

          <input
            ref={password}
            type="password"
            placeholder="password"
            name="user_password"
            id=""
            className="w-full p-2 mb-4 bg-[#333333] text-sm rounded"
            defaultValue=""
          />
          <button
            onClick={handleButtonCLick}
            className="w-full bg-red-600 p-2 my-4 rounded font-semibold"
          >
            {isSignInForm ? "Sign In" : "Sign up"}
          </button>
          <p className=" text-red-500 text-sm">{errorMessage}</p>
          <p onClick={toggleForm} className=" cursor-pointer">
            {isSignInForm
              ? "New to netflix? sign up"
              : "already have an account? sign in"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
