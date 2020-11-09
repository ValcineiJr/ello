import axios from "axios";
import URL from "./config";

const api = axios.create({
  baseURL: URL,
});

export default api;
