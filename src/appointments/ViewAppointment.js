import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewAppointment() {
  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadAppointment();
  }, []);

  const loadAppointment = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/v1/appointment/${id}`
    );
    setAppointment(result.data);
  };

  const formatTime = (timeString) => {
    const [hourString, minute] = timeString.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
  };

  return (
    <div>
      <div>
        <h2 class="text-3xl font-extrabold dark:text-white mb-3">
          Appointment Details
        </h2>
        <div class="flex justify-center">
          <ul class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
              ID: {appointment.id}
            </li>
            <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
              Name: {appointment.name}
            </li>
            <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
              Time: {formatTime(appointment.time)}
            </li>
            <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
              Date: {appointment.date}
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-4">
        <Link
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2"
          to={"/appointments"}
        >
          Back to Appointments
        </Link>
      </div>
    </div>
  );
}
