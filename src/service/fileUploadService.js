import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/";

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

export default {
  upload,
  getFiles,
};
