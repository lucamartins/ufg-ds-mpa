import axios from "axios";

const api = axios.create({
  baseURL: "https://52.67.213.33/mpa",
});

export default api;
