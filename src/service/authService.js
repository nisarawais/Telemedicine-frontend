import axios from "axios";
import { Navigate } from "react-router-dom";

const API_URL = "http://localhost:8080/api/";

class AuthService {
  login(email, password) {
    return axios
      .post(
        API_URL + "login",
        new URLSearchParams({
          email,
          password,
        })
      )
      .then((response) => {
        let token = response.data.access_token;
        localStorage.setItem("SavedToken", "Bearer " + token);
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        const tokenParts = token.split(".");
        const encodedPayload = tokenParts[1];
        const rawPayload = atob(encodedPayload);
        const user = JSON.parse(rawPayload);
        localStorage.setItem("user", user.roles);
      });
  }

  logout() {
    localStorage.clear();
    Navigate("/");
  }

  register(name, email, password) {
    return axios.post(API_URL + "user/save", {
      name,
      email,
      password,
    });
  }

  getCurrentUser() {
    return localStorage.getItem("user");
  }
}

export default new AuthService();
