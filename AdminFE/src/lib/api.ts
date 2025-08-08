// frontend/src/lib/api.ts

import Axios from "./axios";

export const registerDoctor = async (data: {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role:"DOCTOR"
}) => {
  const response = await Axios.post(`/auth/signup`, data);

  if (response.status!=200) throw new Error("Doctor registration failed");
  return response.data;
};

export const loginUser = async (data: {
  email: string;
  password: string;
//   role:"DOCTOR" | "ADMIN"
}) => {
  const response = await Axios.post(`/auth/login`, data);
  return response.data; 
};
