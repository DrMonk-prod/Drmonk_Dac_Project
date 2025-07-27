export interface User {
  id: string;
  email: string;
  name: string;
  emailVerified: boolean;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  name: string;
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
