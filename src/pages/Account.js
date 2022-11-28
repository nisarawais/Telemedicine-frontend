import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "../service/userService";
import fileUploadService from "../service/fileUploadService";

const Account = () => {
  const [user, setUser] = useState({
    emergency: Boolean,
  });
  const [fileInfos, setFileInfos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    loadUser();
    fileUploadService.getFiles(id).then((response) => {
      setFileInfos(response.data);
    });
  }, []);

  const loadUser = async () => {
    const result = await userService.getUserById(id);
    setUser(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    user.emergency = true;
    await userService.updateuser(user.id, user);
  };

  return (
    <div className="flex justify-center mt-5 mr-3 px-16">
      <div className="block p-10 rounded-lg shadow-lg bg-white max-w-sm">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          Profile
        </h5>
        <div className="flex justify-center">
          <ul className="w-300 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
              Name: {user.name}
            </li>
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
              Email: {user.email}
            </li>
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
              Address: {user.address}
            </li>
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
              Age: {user.age}
            </li>
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
              Date of Birth: {user.dob}
            </li>
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
              Phone Number: {user.phoneNumber}
            </li>
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
              Emergency: {String(user.emergency)}
            </li>
          </ul>
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold mx-1 mt-2 py-2 px-4 border rounded"
          onClick={(e) => onSubmit(e)}
        >
          Emergency
        </button>
      </div>
      <div className="block p-10 rounded-lg shadow-lg bg-white max-w-sm ml-3 px-16">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          Files
        </h5>
        <div className="flex justify-center">
          <ul className="w-300 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {fileInfos &&
              fileInfos.map((file, index) => (
                <li
                  className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
                  key={index}
                >
                  <a href={file.url}>{file.fileName}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Account;
