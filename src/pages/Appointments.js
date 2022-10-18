import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  const { id } = useParams();

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
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
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
                    className="btn btn-primary mx-2"
                    to={`/viewappointment/${appointment.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editappointment/${appointment.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteAppointment(appointment.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-success btn-block" to="/addappointment">
          Add Appointment
        </Link>
      </div>
    </div>
  );
}
