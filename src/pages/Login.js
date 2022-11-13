import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../service/authService";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    authService.login(input.email, input.password).then(() => {
      setLoading(false);
      if (!loading) {
        navigate("/userdashboard");
        //temporary
        window.location.reload();
      }
    });
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObject = { ...prev, [name]: "" };

      switch (name) {
        case "email":
          if (!value) {
            stateObject[name] = "Please enter your email.";
          }
          break;

        case "password":
          if (!value) {
            stateObject[name] = "Please enter the password.";
          }
          break;
        default:
          break;
      }

      return stateObject;
    });
  };
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 m-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 space-y-6">
      <form className="space-y-4" onSubmit={(e) => onSubmit(e)}>
        <p className="text-2xl font-extrabold">Login</p>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={input.email}
            onChange={onInputChange}
            onBlur={validateInput}
            autoComplete="email"
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Email"
            required
          />
          <div className="red">{error.email && <span>{error.email}</span>}</div>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput}
            autoComplete="password"
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Password"
            required
          />
          <div className="red">
            {error.password && <span>{error.password}</span>}
          </div>
        </div>
        <button className="w-full px-10 py-3 text-white font-semibold bg-black rounded-md">
          Login
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="inline ml-4 w-6 h-6"
          ></svg>
        </button>
        <button
          className="w-full px-10 py-3 text-white font-semibold bg-black rounded-md reg"
          type={"submit"}
          onClick={() => navigate("/registration")}
        >
          Sign Up
        </button>
      </form>
      <a
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="/hospitalregistration"
      >
        or Hospital Registration?
      </a>
    </div>
  );
};

export default Login;
