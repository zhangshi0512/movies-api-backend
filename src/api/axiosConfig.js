import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8080/api/v1/movies",
  baseURL: "http://localhost:8080",
  // headers: { "ngrok-skip-browser-warning": "true" },
});
