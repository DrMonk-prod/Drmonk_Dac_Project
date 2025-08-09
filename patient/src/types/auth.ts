export interface AuthUser {
  id: number;
  fullName: string;
  email: string;
  gender: "MEN" | "FEMALE" | "OTHER" | null;
  phoneNumber: string;
  role: "ADMIN" | "DOCTOR" | "PATIENT";
  profileImg: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface OTPVerificationData {
  email: string;
  otp: string;
}

export interface ResetPasswordData {
  email: string;
  password: string;
  confirmPassword: string;
}

export type AuthStep =
  | "login"
  | "signup"
  | "forgot-password"
  | "verify-otp"
  | "reset-password";
