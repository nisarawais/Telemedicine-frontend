import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="flex items-center flex-wrap bg-gray-900 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <Link class="font-semibold text-xl tracking-tight" to="/">
          TeleHealth
        </Link>
      </div>
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <div class="text-base lg:flex-grow">
          <Link
            class="block mt-4 lg:inline-block lg:mt-0  text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
            to="/login"
          >
            Login
          </Link>
          <Link
            class="block mt-4 lg:inline-block lg:mt-0  text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
            to="/appointments"
          >
            Appointments
          </Link>
          <Link
            class="block mt-4 lg:inline-block lg:mt-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
            to="/messages"
          >
            Messages
          </Link>
          <Link
            class="block mt-4 lg:inline-block lg:mt-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
            to="/files"
          >
            My Files
          </Link>
          <Link
            class="block mt-4 lg:inline-block lg:mt-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
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
