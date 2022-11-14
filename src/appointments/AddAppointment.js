import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../service/authService";
import userService from "../service/userService";

export default function AddAppointment() {
  const [select, setSelected] = useState("");
  const [optionList, setOptionList] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    loadHealthcareProfessionals();
  }, []);

  const loadHealthcareProfessionals = async () => {
    const result = await userService.getHealthcareProfessionals();
    setOptionList(result.data);
  };

  const [appointment, setAppointment] = useState({
    name: "",
    date: "",
    time: "",
    healthcareProfessional: {
      id: "",
    },
    patient: {
      id: "",
    },
  });

  const { name, date, time, healthcareProfessional, patient } = appointment;

  const onInputChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    healthcareProfessional.id = select;
    patient.id = JSON.parse(authService.getCurrentUser()).id;
    await userService.addAppointment(appointment);
    navigate("/appointments");
  };

  return (
    <div className="flex h-screen justify-center">
      <form className="" onSubmit={(e) => onSubmit(e)}>
        <h2 className="text-3xl font-extrabold dark:text-white mb-3">
          Register Appointment
        </h2>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Enter Appointment Name
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            type={"name"}
            placeholder="Enter Appointment Name"
            name="name"
            value={name}
            required
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Select Date
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            type={"date"}
            placeholder="Enter date"
            name="date"
            value={date}
            required
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="time"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Select Time
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            type={"time"}
            placeholder="Enter time"
            name="time"
            value={time}
            required
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="relative inline-block w-full text-gray-700">
          <label
            htmlFor="doctor"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Select Doctor
          </label>
          <select
            className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
            disabled={false}
            value={select}
            onChange={(e) => setSelected(e.currentTarget.value)}
          >
            <option>Choose Doctor</option>
            {optionList.map((healthcareProfessional) => (
              <option
                key={healthcareProfessional.id}
                value={healthcareProfessional.id}
              >
                {healthcareProfessional.name}
              </option>
            ))}
          </select>
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
            to="/appointments"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
