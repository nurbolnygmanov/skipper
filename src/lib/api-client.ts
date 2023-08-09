import { API_URL } from "@/config/constants";
import Axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

export const apiClient = Axios.create(config);

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);
