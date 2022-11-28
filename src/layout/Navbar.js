import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import authService from "../service/authService";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showUserDashboard, setShowUserDashboard] = useState(false);
  const [showHPDashboard, setShowHPDashboard] = useState(false);
  const [showHospitalDashboard, setShowHospitalDashboard] = useState(false);

  const user = authService.getCurrentUser();

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
      if (user.includes("ROLE_PATIENT")) {
        setShowUserDashboard(true);
      }
      if (user.includes("ROLE_HP")) {
        setShowHPDashboard(true);
      }
      if (user.includes("ROLE_HOSPITAL")) {
        setShowHospitalDashboard(true);
      }
    }
  }, []);

  const logOut = () => {
    authService.logout();
  };

  return (
    <div>
      <nav className="flex items-center flex-wrap bg-gray-900 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link className="font-semibold text-xl tracking-tight" to="/">
            Telehealth
          </Link>
        </div>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <div className="text-base lg:flex-grow">
            {currentUser ? (
              <div>
                {showUserDashboard && (
                  <>
                    <Link
                      className="block mt-4 lg:inline-block lg:mt-0  text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
                      to="/userdashboard"
                    >
                      Dashboard
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
                      to={`/account/${JSON.parse(user).id}`}
                    >
                      My Account
                    </Link>
                  </>
                )}
                {showHPDashboard && (
                  <>
                    <Link
                      className="block mt-4 lg:inline-block lg:mt-0  text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
                      to="/hpdashboard"
                    >
                      Dashboard
                    </Link>
                    <Link
                      className="block mt-4 lg:inline-block lg:mt-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
                      to="/messages"
                    >
                      Messages
                    </Link>
                  </>
                )}
                {showHospitalDashboard && (
                  <>
                    <Link
                      className="block mt-4 lg:inline-block lg:mt-0  text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
                      to="/hospitaldashboard"
                    >
                      Dashboard
                    </Link>
                    <Link
                      className="block mt-4 lg:inline-block lg:mt-0  text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
                      to="/patients"
                    >
                      Patients
                    </Link>
                  </>
                )}

                <Link
                  className="block mt-4 lg:inline-block lg:mt-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
                  to="/"
                  onClick={logOut}
                >
                  Logout
                </Link>
              </div>
            ) : (
              <Link
                className="block mt-4 lg:inline-block lg:mt-0  text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
                to="/login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
