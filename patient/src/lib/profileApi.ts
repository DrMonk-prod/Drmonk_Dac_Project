import apiClient from "@/lib/axios";
import { AuthUser } from "@/types/auth";

//// profile apis

export const register = async (data: {
  fullName: string;
  email: string;
  password: string;
  role: "PATIENT";
}) => {
  const response = await apiClient.post(`/auth/signup`, data);
  return response.data;
};

export const loginUser = async (data: { email: string; password: string }) => {
  const response = await apiClient.post(`/auth/login`, data);
  return response.data;
};

export const getProfile = async () => {
  const res = await apiClient.get("/me/profile");
  return res;
};

export const updateProfile = async (data: AuthUser) => {
  const res = await apiClient.put("/me/profile", data);
  return res.data;
};

export const updateProfileImage = async (formData: FormData) => {
  const res = await apiClient.post("/me/profile-image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
