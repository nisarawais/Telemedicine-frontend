import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userService from "../service/userService";

export default function HospitalDashboard() {
  const [healthcareProfessionals, setHealthcareProfessionals] = useState([]);

  useEffect(() => {
    loadHealthcareProfessionals();
  }, []);

  const loadHealthcareProfessionals = async () => {
    const result = await userService.getHealthcareProfessionals();
    setHealthcareProfessionals(result.data);
  };

  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
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
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {healthcareProfessionals.map((healthcareProfessional, id) => (
              <tr
                key={id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="py-4 px-6">{healthcareProfessional.name}</td>
                <td className="py-4 px-6">{healthcareProfessional.email}</td>
                <td className="py-4 px-6">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold mx-1 py-2 px-4 border rounded"
                    onClick={() => {
                      userService.deleteHP(healthcareProfessional.id);
                      loadHealthcareProfessionals();
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
      <div className="mt-5">
        <Link
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded"
          to="/addHP"
        >
          Add Healthcare Professional
        </Link>
      </div>
    </div>
  );
}
