import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/";

//file upload service for file upload functions
const upload = (file) => {
  let formData = new FormData();

  formData.append("file", file);
  return axios.post(API_URL + "api/upload", formData, {
    headers: authHeader(),
  });
};

const getFiles = (id) => {
  return axios.get(API_URL + `files/${id}`, { headers: authHeader() });
};

const deleteFile = (id) => {
  return axios.delete(API_URL + `files/${id}`, { headers: authHeader() });
};

export default {
  upload,
  getFiles,
  deleteFile,
};
