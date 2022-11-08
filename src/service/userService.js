import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8080/api/";

class UserService {
  getAppointments() {
    return axios.get(API_URL + "appointment", { headers: authHeader() });
  }

  getAppointment(id) {
    return axios.get(API_URL + `appointment/${id}`, {
      headers: authHeader(),
    });
  }

  addAppointment(appointment) {
    return axios.post(API_URL + "appointment", appointment, {
      headers: authHeader(),
    });
  }

  deleteAppointment(id) {
    return axios.delete(API_URL + `appointment/${id}`, {
      headers: authHeader(),
    });
  }

  updateAppointment(id, appointment) {
    return axios.put(API_URL + `appointment/${id}`, appointment, {
      headers: authHeader(),
    });
  }

  addRole(email, roleName) {
    return axios.post(API_URL + "role/addtouser", email, roleName, {
      headers: authHeader(),
    });
  }

  getUser() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }
}

export default new UserService();
