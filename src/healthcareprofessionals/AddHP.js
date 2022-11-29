import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userService from "../service/userService";

export default function AddHP() {
  let navigate = useNavigate();

  const [healthcareProfessional, setHealthcareProfessional] = useState({
    name: "",
    email: "",
    dob: "",
    address: "",
    phoneNumber: "",
    specialty: "",
    password: "",
  });

  const { name, email, dob, address, phoneNumber, specialty, password } =
    healthcareProfessional;

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
    <div className="bg-gray-100 m-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 space-y-6">
      <form className="space-y-4" onSubmit={(e) => onSubmit(e)}>
        <p className="text-2xl font-extrabold">Patient Registration</p>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 sr-only"
          >
            Enter Name
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light "
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
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 sr-only"
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
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 sr-only"
          >
            Enter Address
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            type={"text"}
            placeholder="Enter Adresss"
            name="address"
            value={address}
            required
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="dob"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 sr-only"
          >
            Enter Date of Birth
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            type={"date"}
            placeholder="Enter Date of Birth"
            name="dob"
            value={dob}
            required
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="phoneNumber"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 sr-only"
          >
            Enter Phone Number
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            type={"tel"}
            placeholder="Enter Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            required
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="relative inline-block w-full text-gray-700">
          <label
            htmlFor="specialty"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 sr-only"
          >
            Select Specialty
          </label>
          <select
            className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
            type={"text"}
            name="specialty"
            value={specialty}
            onChange={(e) => onInputChange(e)}
          >
            <option>Choose Specialty</option>
            <option>Brain</option>
            <option>Muscle</option>
            <option>Bone</option>
            <option>Eye</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 sr-only"
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
