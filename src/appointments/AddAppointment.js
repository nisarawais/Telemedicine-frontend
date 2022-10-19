import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddAppointment() {
  const [healthcareProfessionals, setHealthcareProfessionals] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:8080/api/v1/healthcareProfessional")
      .then((response) => setHealthcareProfessionals(response.data))
      .then((error) => console.log(error));
  }, []);

  let navigate = useNavigate();

  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
  });

  const { date, time } = appointment;

  const onInputChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/v1/appointment", appointment);
    navigate("/appointments");
  };

  return (
    <div class="flex h-screen justify-center">
      <form class="" onSubmit={(e) => onSubmit(e)}>
        <h2 class="text-3xl font-extrabold dark:text-white mb-3">
          Register Appointment
        </h2>
        <div class="mb-6">
          <label
            for="date"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Select Date
          </label>
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            type={"date"}
            placeholder="Enter date"
            name="date"
            value={date}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="mb-6">
          <label
            for="time"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Select Time
          </label>
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            type={"time"}
            placeholder="Enter time"
            name="time"
            value={time}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="relative inline-block w-full text-gray-700">
          <label
            for="doctor"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Select Doctor
          </label>
          <select class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline">
            {healthcareProfessionals.map((healthcareProfessional) => (
              <option
                key={healthcareProfessional.id}
                value={healthcareProfessional}
              >
                {healthcareProfessional.name}
              </option>
            ))}
          </select>
        </div>
        <div class="mt-4">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2"
          >
            Submit
          </button>
          <Link
            class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            to="/appointments"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
