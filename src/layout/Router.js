import React from "react";
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

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/files" element={<Files />} />
      <Route path="/account" element={<Account />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/addappointment" element={<AddAppointment />} />
      <Route path="/editappointment/:id" element={<EditAppointment />} />
      <Route path="/viewappointment/:id" element={<ViewAppointment />} />
    </Routes>
  );
};

export default Router;
