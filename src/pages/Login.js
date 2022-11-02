import React from "react";
import { useNavigate } from "react-router-dom";
import Registration from "./Registration";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 m-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 space-y-6">
      <p className="text-2xl font-extrabold">Login</p>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="email"
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Email" required
        />
      </div>
      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="password"
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Password" required
        />
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
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
      <button className="w-full px-10 py-3 text-white font-semibold bg-black rounded-md reg" onClick={() => navigate("/registration")}>
        Register
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />

      </button>
    </div>
  );
};

export default Login;
