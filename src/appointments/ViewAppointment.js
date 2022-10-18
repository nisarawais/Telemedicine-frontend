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

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Appointment Details</h2>
          <div className="card">
            <div className="card-header">
              Details of Appointment id : {appointment.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Date: </b>
                  {appointment.date}
                </li>
                <li className="list-group-item">
                  <b>Time: </b>
                  {appointment.time}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
