import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import InputField from "../InputField";
// import Button from "../Button";
import { useRegisterMutation, useLoginMutation } from "../../services/auth";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Login = () => {
  // const url = window.location.href.split("/");
  // const isRegister = url[url.length - 1] === "register";
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [register, { isLoading }] = useRegisterMutation();
  const [login, { error: err }] = useLoginMutation();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password || !name) {
      return setError("Please fill all the fields");
    }
    try {
      await register({ email, password, name }).unwrap();
    } catch (error) {
      setError(error?.data?.msg);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      return setError("Please fill all the fields");
    }
    try {
      await login({ email, password }).unwrap();
    } catch (error) {
      setError(error?.data?.msg);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Login form */}
      <div className="bg-gray-500/20 py-14 px-12 md:px-20 rounded-md w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">
          {!isRegister ? "Login" : "Register"}
        </h3>
        {/* Error modal */}
        {error && <p className="text-red-400">{error}</p>}

        <form className="">
          <label className="labelStyle" htmlFor="email">
            Email
          </label>
          <input
            className={`inputStyle mb-3`}
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {isRegister && (
            <>
              <label className="labelStyle" htmlFor="username">
                Username
              </label>
              <input
                className="inputStyle mb-3"
                name="username"
                id="username"
                type="text"
                placeholder="johndoe"
                onChange={(e) => setName(e.target.value)}
              />
            </>
          )}
          <label className="labelStyle" htmlFor="password">
            Password
          </label>
          <div className="relative flex items-center mb-3">
            <input
              className="inputStyle"
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <BsEyeSlash
                onClick={() => setShowPassword(false)}
                className="absolute right-2 text-gray-700 z-10"
              />
            ) : (
              <BsEye
                onClick={() => setShowPassword(true)}
                className="absolute right-2 text-gray-700 z-10"
              />
            )}
          </div>
          {isRegister && (
            <>
              <label className="labelStyle" htmlFor="confirm">
                Confirm Password
              </label>
              <input
                className="inputStyle mb-3"
                name="confirm"
                id="confirm"
                type="text"
                placeholder="*********"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </>
          )}
        </form>

        <div className="flex items-center mb-5">
          {/* <input
            className="bg-green-500/40 font-semibold tracking-wide px-4 py-1 rounded-md mr-auto"
            id="login"
            type="submit"
            value={!isRegister ? "Sign in" : "Sign up"}
          /> */}
          <button
            className="btnStyle"
            onClick={!isRegister ? handleLogin : handleRegister}
          >
            {!isRegister ? "Sign in" : "Sign up"}
          </button>
          {!isRegister && (
            <Link to="#" className="text-gray-300 underline ml-auto">
              Forgot Password
            </Link>
          )}
        </div>
        <p className="text-gray-300 text-center">
          {!isRegister
            ? "Don't have an account? "
            : "Already have an account? "}
          <Link
            to="#"
            onClick={() => {
              setIsRegister(!isRegister);
              setError("");
            }}
            className="text-green-500 underline"
          >
            {!isRegister ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
