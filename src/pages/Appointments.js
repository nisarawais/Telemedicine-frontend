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

  return (
    <div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              ID
            </th>
            <th scope="col" class="py-3 px-6">
              Date
            </th>
            <th scope="col" class="py-3 px-6">
              Time
            </th>
            <th scope="col" class="py-3 px-6">
              Doctor
            </th>
            <th scope="col" class="py-3 px-6">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>
                <Link
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-1 py-2 px-4 border border-black rounded"
                  to={`/viewappointment/${appointment.id}`}
                >
                  View
                </Link>
                <Link
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-1 py-2 px-4 border border-black rounded"
                  to={`/editappointment/${appointment.id}`}
                >
                  Edit
                </Link>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold mx-1 py-2 px-4 border border-black rounded"
                  onClick={() => deleteAppointment(appointment.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-5">
        <Link
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-black rounded justify-center"
          to="/addappointment"
        >
          Add Appointment
        </Link>
      </div>
    </div>
  );
}
