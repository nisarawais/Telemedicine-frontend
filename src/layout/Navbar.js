import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center flex-wrap bg-gray-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link className="font-semibold text-xl tracking-tight" to="/">
          TeleHealth
        </Link>
      </div>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <div className="text-base lg:flex-grow">
          <Link
            className="block mt-4 lg:inline-block lg:mt-0  text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0  text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
            to="/appointments"
          >
            Appointments
          </Link>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
            to="/messages"
          >
            Messages
          </Link>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
            to="/files"
          >
            My Files
          </Link>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
            to="/account"
          >
            My Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
