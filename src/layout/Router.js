import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Messages from "../pages/Messages";
import Files from "../pages/Files";
import Login from "../pages/Login";
import Account from "../pages/Account";
import AddAppointment from "../appointments/AddAppointment";
import EditAppointment from "../appointments/EditAppointment";
import ViewAppointment from "../appointments/ViewAppointment";
import Appointments from "../pages/Appointments";
import Registration from "../pages/Registration";
import UserDashboard from "../pages/UserDashboard";
import HPDashboard from "../pages/HPDashboard";
import authService from "../service/authService";
import HospitalRegistration from "../pages/HospitalRegistration";
import HospitalDashboard from "../pages/HospitalDashboard";

const Router = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <Routes>
      <>
        {currentUser ? (
          <>
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route path="/hpdashboard" element={<HPDashboard />} />
            <Route path="/hospitaldashboard" element={<HospitalDashboard />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/files" element={<Files />} />
            <Route path="/account" element={<Account />} />
            <Route path="/addappointment" element={<AddAppointment />} />
            <Route path="/editappointment/:id" element={<EditAppointment />} />
            <Route path="/viewappointment/:id" element={<ViewAppointment />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route
              path="/hospitalregistration"
              element={<HospitalRegistration />}
            />
          </>
        )}
      </>
    </Routes>
  );
};

export default Router;
