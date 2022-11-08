import axios from "axios";
import { Navigate } from "react-router-dom";
import userService from "./userService";

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
      });
  }

  setUser = async () => {
    const result = await userService.getUser();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result.data));
  };

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
