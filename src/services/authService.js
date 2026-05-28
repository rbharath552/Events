import axios from "axios";

const API = axios.create({
  baseURL: "https://event-38as.onrender.com/api",
});

export const registerUser = async (userData) => {

  const response = await API.post(
    "/auth/register",
    userData
  );

  return response.data;
};