import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_HOST,
  withCredentials: true,
  headers: {
    user_id: localStorage.getItem("user_id"),
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
