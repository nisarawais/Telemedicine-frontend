import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const result = await axios.get("http://localhost:8080/api/v1/appointment");
    setAppointments(result.data);
  };

  const deleteAppointment = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/appointment/${id}`);
    loadAppointments();
  };

  const formatTime = (timeString) => {
    const [hourString, minute] = timeString.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
  };

  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Appointment Name
              </th>
              <th scope="col" className="py-3 px-6">
                Date
              </th>
              <th scope="col" className="py-3 px-6">
                Time
              </th>
              <th scope="col" className="py-3 px-6">
                Doctor
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, id) => (
              <tr
                key={id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="py-4 px-6">{appointment.name}</td>
                <td className="py-4 px-6">{appointment.date}</td>
                <td className="py-4 px-6">{formatTime(appointment.time)}</td>
                <td></td>
                <td className="py-4 px-6">
                  <Link
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-1 py-2 px-4 border rounded"
                    to={`/viewappointment/${appointment.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-1 py-2 px-4 border rounded"
                    to={`/editappointment/${appointment.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold mx-1 py-2 px-4 border rounded"
                    onClick={() => deleteAppointment(appointment.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5">
        <Link
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded"
          to="/addappointment"
        >
          Add Appointment
        </Link>
      </div>
    </div>
  );
}