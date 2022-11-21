import axios from "axios";
import config from "../config";

let baseURL = config.API_URL;

export default axios.create({
  baseURL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export const axiosPrivate = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  withCredentials: true,
});
