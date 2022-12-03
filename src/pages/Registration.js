import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../service/authService";

const Registration = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    address: "",
    dob: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    address: "",
    dob: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  let navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    authService.registerPatient(
      input.name,
      input.email,
      input.address,
      input.dob,
      input.phoneNumber,
      input.password
    );
    navigate("/login");
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObject = { ...prev, [name]: "" };

      switch (name) {
        case "firstName":
          if (!value) {
            stateObject[name] = "Please enter your first name.";
          }
          break;

        case "lastName":
          if (!value) {
            stateObject[name] = "Please enter your last name.";
          }
          break;

        case "email":
          if (!value) {
            stateObject[name] = "Please enter your email.";
          }
          break;

        case "address":
          if (!value) {
            stateObject[name] = "Please enter your address.";
          }
          break;

        case "dob":
          if (!value) {
            stateObject[name] = "Please enter your Date of Birth.";
          }
          break;

        case "phoneNumber":
          if (!value) {
            stateObject[name] = "Please enter your Phone Number.";
          }
          break;

        case "password":
          if (!value) {
            stateObject[name] = "Please enter the password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObject["confirmPassword"] =
              "Your password and the confirm password are not matching. Please type them again.";
          } else {
            stateObject["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObject[name] = "Please re-enter your password.";
          } else if (input.password && value !== input.password) {
            stateObject[name] =
              "Your password and the confirm password are not matching. Please type them again.";
          }
          break;

        default:
          break;
      }

      return stateObject;
    });
  };

  return (
    <div className="bg-gray-100 m-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 space-y-6">
      <form className="space-y-4" onSubmit={(e) => onSubmit(e)}>
        <p className="text-2xl font-extrabold">Patient Registration</p>
        <div className="row">
          <label htmlFor="name" className="sr-only">
            First Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={input.name}
            onChange={onInputChange}
            onBlur={validateInput}
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Name"
            required
          />
          <div>{error.name && <span>{error.name}</span>}</div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
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
          <label htmlFor="address" className="sr-only">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={input.address}
            onChange={onInputChange}
            onBlur={validateInput}
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Address"
            required
          />
          <div className="red">
            {error.address && <span>{error.address}</span>}
          </div>
        </div>
        <div>
          <label htmlFor="dob" className="sr-only">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={input.dob}
            onChange={onInputChange}
            onBlur={validateInput}
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Date of Birth"
            required
          />
          <div className="red">{error.dob && <span>{error.dob}</span>}</div>
        </div>
        <div>
          <label htmlFor="phoneNumber" className="sr-only">
            phoneNumber
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={input.phoneNumber}
            onChange={onInputChange}
            onBlur={validateInput}
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Phone Number"
            required
          />
          <div className="red">
            {error.phoneNumber && <span>{error.phoneNumber}</span>}
          </div>
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
          />
          <div className="red">
            {error.password && <span>{error.password}</span>}
          </div>
        </div>
        <div>
          <label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPpassword"
            value={input.confirmPassword}
            onChange={onInputChange}
            onBlur={validateInput}
            autoComplete="new-password"
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Confirm Password"
          />
          <div className="red">
            {error.confirmPassword && <span>{error.confirmPassword}</span>}
          </div>
        </div>
        <button
          className="w-full px-10 py-3 text-white font-semibold bg-black rounded-md"
          type="submit"
        >
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
      </form>
    </div>
  );
};

export default Registration;
