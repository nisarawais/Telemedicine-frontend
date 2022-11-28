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

  getUserById(id) {
    return axios.get(API_URL + `user/${id}`, { headers: authHeader() });
  }

  updateuser(id, patient) {
    return axios.put(API_URL + `patient/${id}`, patient, {
      headers: authHeader(),
    });
  }

  getHealthcareProfessionals() {
    return axios.get(API_URL + "healthcareProfessional", {
      headers: authHeader(),
    });
  }

  getPatients() {
    return axios.get(API_URL + "patient", {
      headers: authHeader(),
    });
  }

  addHP(healthcareProfessional) {
    return axios.post(
      API_URL + "healthcareProfessional",
      healthcareProfessional,
      {
        headers: authHeader(),
      }
    );
  }

  deleteHP(id) {
    return axios.delete(API_URL + `healthcareProfessional/${id}`, {
      headers: authHeader(),
    });
  }

  deletePatient(id) {
    return axios.delete(API_URL + `patient/${id}`, {
      headers: authHeader(),
    });
  }
}

export default new UserService();
