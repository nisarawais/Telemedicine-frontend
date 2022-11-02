import React from "react";

const Registration = () => {
  return (
    <div className="bg-gray-100 m-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 space-y-6">
      <p className="text-2xl font-extrabold">Registration</p>
      <div className="row">
      <div className="column">
        <label htmlFor="firstName" className="sr-only">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="First Name"
        />
      </div>
      <div className="column space">
        <label htmlFor="lastName" className="sr-only">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Last Name"
        />
      </div>
      </div>
      <div>
        <label htmlFor="role" className="sr-only">
          Role
        </label>
        <p className="instruction">Choose your role:</p>
        <select name="role" id="role" className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          <option value="patient">Patient</option>
          <option value="professional">Professional</option>
        </select>
      </div>
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
          placeholder="Email"
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
          placeholder="Password"
        />
      </div>
      <div>
        <label htmlFor="password" className="sr-only">
          Confirm Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="password"
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Confirm Password"
        />
      </div>
      <button className="w-full px-10 py-3 text-white font-semibold bg-black rounded-md">
        Register
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
    </div>
  );
};

export default Registration;
