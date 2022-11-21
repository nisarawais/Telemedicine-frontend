import React, { useEffect, useState } from "react";
import userService from "../service/userService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PatientManager() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    loadPatients();
    check();
  }, []);

  const loadPatients = async () => {
    const result = await userService.getPatients();
    setPatients(result.data);
  };

  const check = () => {
    patients.forEach((patient) => {
      if (patient.emergency === true) {
        toast.error(patient.email + " is having an emergency");
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <ToastContainer
          position="top-center"
          autoClose={false}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Address
              </th>
              <th scope="col" className="py-3 px-6">
                Emergency
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, id) => (
              <tr
                key={id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="py-4 px-6">{patient.name}</td>
                <td className="py-4 px-6">{patient.email}</td>
                <td className="py-4 px-6">{patient.address}</td>
                <td className="py-4 px-6">{String(patient.emergency)}</td>
                <td className="py-4 px-6">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold mx-1 py-2 px-4 border rounded"
                    onClick={() => {
                      userService
                        .deletePatient(patient.id)
                        .then(function (response) {
                          console.log(response);
                          loadPatients();
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
}
