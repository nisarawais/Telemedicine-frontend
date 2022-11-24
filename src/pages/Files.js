import React, { useState, useEffect } from "react";
import fileUploadService from "../service/fileUploadService";

const Files = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [message, setMessage] = useState("");
  const [fileInfos, setFileInfos] = useState([]);

  useEffect(() => {
    fileUploadService.getFiles().then((response) => {
      setFileInfos(response.data);
    });
  }, []);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const upload = () => {
    let currentFile = selectedFiles[0];
    setCurrentFile(currentFile);
    fileUploadService
      .upload(currentFile)
      .then((response) => {
        setMessage(response.data.message);
        return fileUploadService.getFiles();
      })
      .then((files) => {
        setFileInfos(files.data);
      })
      .catch(() => {
        setMessage("Could not upload the file!");
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };

  return (
    <div className="bg-gray-100 m-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 space-y-6">
      <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
        Upload File
      </h5>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        onChange={selectFile}
      ></input>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={!selectedFiles}
        onClick={upload}
      >
        Upload
      </button>

      <div>{message}</div>

      <div>
        <div>List of Files</div>
        <ul>
          {fileInfos &&
            fileInfos.map((file, index) => (
              <li key={index}>
                <a href={file.url}>{file.fileName}</a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Files;
