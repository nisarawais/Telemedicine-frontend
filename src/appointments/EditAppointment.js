import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditAppointment() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
  });

  const { date, time } = appointment;

  const onInputChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8080/api/v1/appointment/${id}`,
      appointment
    );
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/v1/appointment/${id}`
    );
    setAppointment(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Appointment</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Date" className="form-label">
                Date
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Date"
                name="date"
                value={date}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Time" className="form-label">
                Time
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Time"
                name="time"
                value={time}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
