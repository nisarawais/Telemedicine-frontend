import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import AddAppointment from "./appointments/AddAppointment";
import EditAppointment from "./appointments/EditAppointment";
import ViewAppointment from "./appointments/ViewAppointment";
import Appointments from "./pages/Appointments";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/addappointment" element={<AddAppointment />} />
          <Route path="/editappointment/:id" element={<EditAppointment />} />
          <Route path="/viewappointment/:id" element={<ViewAppointment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
