import axios from "axios";

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

  logout() {
    localStorage.removeItem("SavedToken");
  }

  register(name, email, password) {
    return axios.post(API_URL + "user/save", {
      name,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("SavedToken"));
  }
}

export default new AuthService();
