import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userService from "../service/userService";

export default function AddHP() {
  let navigate = useNavigate();

  const [healthcareProfessional, setHealthcareProfessional] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = healthcareProfessional;

  const onInputChange = (e) => {
    setHealthcareProfessional({
      ...healthcareProfessional,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await userService.addHP(healthcareProfessional);
    navigate("/hospitaldashboard");
  };

  return (
    <div className="flex h-screen justify-center">
      <form className="" onSubmit={(e) => onSubmit(e)}>
        <h2 className="text-3xl font-extrabold dark:text-white mb-3">
          Register Healthcare Professional
        </h2>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Enter Name
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            type={"name"}
            placeholder="Enter Name"
            name="name"
            value={name}
            required
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Enter Email
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            type={"email"}
            placeholder="Enter Email"
            name="email"
            value={email}
            required
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Enter Password
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            type={"password"}
            placeholder="Enter Password"
            name="password"
            value={password}
            autoComplete="password"
            required
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2"
          >
            Submit
          </button>
          <Link
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            to="/hospitaldashboard"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
