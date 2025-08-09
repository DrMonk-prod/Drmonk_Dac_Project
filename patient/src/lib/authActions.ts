"use client";

import { getProfile, loginUser } from "@/lib/profileApi";
import { AppDispatch } from "@/store/store";
import { setUser, logout as logoutUser } from "@/store/slices/authSlice";
import { AuthUser } from "@/types/auth";

export const login = async (
  dispatch: AppDispatch,
  credentials: {
    email: string;
    password: string;
  }
) => {
  const loginRes = await loginUser(credentials);
  localStorage.setItem("authToken", loginRes.token);

  const profileRes = await getProfile();
  const userData: AuthUser = profileRes.data;

  dispatch(setUser(userData));
};

export const logout = (dispatch: AppDispatch) => {
  localStorage.removeItem("authToken");
  dispatch(logoutUser());
};
