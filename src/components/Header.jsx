import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  //subscribe to the user slice of the store
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("-----------------", user);
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return unsubscribe;
  }, [dispatch]);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen h-28 z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center ">
      <img src={LOGO} alt="logo" className="w-44" />

      {user && (
        <div className="flex justify-between items-center gap-3 ">
          <img
            src={user?.photoURL}
            alt="user_avatar"
            className="w-14 h-14 rounded-full border-red-500 border-2 p-[1px]"
          />
          <button
            onClick={handleSignout}
            className="px-5 py-2 rounded-xl bg-red-500 text-white font-medium shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-100 active:scale-95"
          >
            Sign Out
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default Header;
