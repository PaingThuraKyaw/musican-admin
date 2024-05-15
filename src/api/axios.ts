import Axios from "axios";
import { useAuthStore } from "../store/client/useStore";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const axios = Axios.create({
  baseURL: BASE_URL,
});

export const AuthJsonHeader = (file?: boolean) => {
  const { token } = useAuthStore();
  return {
    "Content-Type": file ? "multipart/form-data" : "Application/json",
    Accept: "Application/json",
    Authorization: `Bearer ${token}`,
  };
};
