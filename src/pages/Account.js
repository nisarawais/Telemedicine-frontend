import React, { useEffect, useState } from "react";
import userService from "../service/userService";

const Account = () => {
  const [account, setAccount] = useState({});

  useEffect(() => {
    loadAccount();
  }, []);

  const loadAccount = async () => {
    const result = await userService.getUser();
    setAccount(result.data);
  };
  return (
    <div className="flex justify-center mt-5">
      <div className="block p-10 rounded-lg shadow-lg bg-white max-w-sm">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          Profile
        </h5>
        <div className="flex justify-center">
          <ul className="w-300 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
              Name: {account.name}
            </li>
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
              Email: {account.email}
            </li>
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
              Address: {account.address}
            </li>
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
              Age: {account.age}
            </li>
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
              Date of Birth: {account.dob}
            </li>
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
              Phone Number: {account.phoneNumber}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Account;
