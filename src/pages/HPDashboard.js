import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userService from "../service/userService";
import formatTime from "../util/formatTime";
const HPDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const result = await userService.getAppointments();
    setAppointments(result.data);
  };

  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Patient Name
              </th>
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
                <td className="py-4 px-6">{appointment.patient.name}</td>
                <td className="py-4 px-6">{appointment.name}</td>
                <td className="py-4 px-6">{appointment.date}</td>
                <td className="py-4 px-6">{formatTime(appointment.time)}</td>

                <td className="py-4 px-6">
                  <Link
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-1 py-2 px-4 border rounded"
                    to={`/account/${appointment.patient.id}`}
                  >
                    View
                  </Link>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold mx-1 py-2 px-4 border rounded"
                    onClick={() => {
                      userService
                        .deleteAppointment(appointment.id)
                        .then(function (response) {
                          console.log(response);
                          loadAppointments();
                        })
                        .catch(function (error) {
                          console.log(error);
                        });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HPDashboard;
