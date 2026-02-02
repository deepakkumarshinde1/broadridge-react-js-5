import axios from "axios";
import { getCookies } from "./authCookies";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
});

// interceptors
api.interceptors.request.use((config) => {
  let token = getCookies();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
