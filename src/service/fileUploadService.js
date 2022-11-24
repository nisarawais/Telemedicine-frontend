import axios from "axios";
const API_URL = "http://localhost:8080/";

const upload = (file) => {
  let formData = new FormData();
  formData.append("file", file);
  console.log(file);
  return axios.post(API_URL + "api/upload", formData);
};

const getFiles = () => {
  return axios.get(API_URL + "files");
};

export default {
  upload,
  getFiles,
};
