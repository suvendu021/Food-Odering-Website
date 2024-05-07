// LogIn.js
import React, { useRef, useState } from "react";
import { ValidateUser } from "../utils/ValidateUser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { SERVER } from "../utils/constants";
import toast from "react-hot-toast";
import LoadingOverlay from "./LoadingOverlay";

const LogIn = () => {
  const [logInBtn, setLogInBtn] = useState(false);
  const [loading, setLoading] = useState(false); // State for loading animation

  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const cookie = new Cookies();

  const handleUserLogin = async () => {
    const validateMSG = logInBtn
      ? ValidateUser(null, emailRef.current.value, passwordRef.current.value)
      : ValidateUser(
          userNameRef.current.value,
          emailRef.current.value,
          passwordRef.current.value
        );

    if (validateMSG) {
      setErrorMessage(`*${validateMSG}`);
      return;
    }

    setLoading(true); // Show loading overlay

    if (logInBtn) {
      try {
        const response = await axios.post(`${SERVER}/api/v1/user/logIn`, {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });
        const { accessToken } = response.data.data;
        const { userName } = response.data.data.authenticatedUser;
        cookie.set("accessToken", accessToken);
        localStorage.setItem("userName", userName);
        navigate("/home");
        toast.success("Successfully LogIn");
      } catch (error) {
        console.log("login error", error);

        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setErrorMessage(`*${error.response.data.message}`);
        } else {
          setErrorMessage("An error occurred. Please try again later.");
        }
      }
    } else {
      try {
        const data = await axios.post(`${SERVER}/api/v1/user/registerUser`, {
          userName: userNameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });
        setErrorMessage("plz click on SignIn");
      } catch (error) {
        console.log("SignUp failed", error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setErrorMessage(`*${error.response.data.message}`);
        } else {
          setErrorMessage("An error occurred. Please try again later.");
        }
      }
    }

    setLoading(false); // Hide loading overlay
  };

  return (
    <div className="h-screen flex justify-center items-center">
      {loading && <LoadingOverlay />} {/* Conditionally render the overlay */}
      <form
        className="flex flex-col md:w-5/12 w-4/5 bg-red-500 px-8 py-5 mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p className="text-white font-semibold text-3xl">
          {logInBtn ? "SignIn" : "SignUp"}
        </p>
        <input
          required
          ref={userNameRef}
          type="text"
          placeholder="Enter UserName"
          className={`p-2 mt-6 ${logInBtn ? "hidden" : "block"}`}
        />
        <input
          required
          ref={emailRef}
          type="email"
          placeholder="Enter Email"
          className="p-2 mt-6"
        />
        <input
          required
          ref={passwordRef}
          type="password"
          placeholder="Enter Password"
          className="p-2 mt-6"
        />
        <button
          className="p-2 mt-6 bg-black font-semibold text-white"
          onClick={handleUserLogin}
          disabled={loading} // Disable the button when loading
        >
          {logInBtn ? "SignIn" : "SignUp"}
        </button>
        <p className="text-white text-xs font-bold">{errorMessage}</p>
        <p
          className="text-white mt-2 cursor-pointer"
          onClick={() => {
            setLogInBtn(!logInBtn);
          }}
        >
          {logInBtn
            ? "New User? Create a new Account"
            : "Already have an account ? SignIn"}
        </p>
      </form>
    </div>
  );
};

export default LogIn;
