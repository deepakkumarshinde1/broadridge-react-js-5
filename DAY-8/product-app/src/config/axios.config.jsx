import axios from "axios";
import { getCookies } from "./authCookies";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
});

// interceptors
api.interceptors.request.use((requestObject) => {
  let token = getCookies();
  if (token) {
    requestObject.headers.Authorization = `Bearer ${token}`;
  }
  return requestObject;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.replace("/login");
    }
    return Promise.reject(error);
  },
);
