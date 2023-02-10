import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.API_URL,
});

export default api;
