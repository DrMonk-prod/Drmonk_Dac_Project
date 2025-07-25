"use client";

import { useState, useCallback } from "react";
import type {
  ForgotPasswordData,
  OTPVerificationData,
  ResetPasswordData,
} from "@/types/auth";
import { AuthAPI } from "@/lib/auth-api";

interface PasswordResetState {
  step: "email" | "otp" | "reset" | "success";
  email: string;
  isLoading: boolean;
  error: string | null;
  success: string | null;
}

export function usePasswordReset() {
  const [state, setState] = useState<PasswordResetState>({
    step: "email",
    email: "",
    isLoading: false,
    error: null,
    success: null,
  });

  const setLoading = useCallback((loading: boolean) => {
    setState((prev) => ({ ...prev, isLoading: loading }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState((prev) => ({ ...prev, error, success: null }));
  }, []);

  const setSuccess = useCallback((success: string | null) => {
    setState((prev) => ({ ...prev, success, error: null }));
  }, []);

  const sendOTP = useCallback(
    async (data: ForgotPasswordData) => {
      setLoading(true);
      setError(null);

      try {
        const result = await AuthAPI.sendPasswordResetOTP(data);
        setState((prev) => ({
          ...prev,
          email: data.email,
          step: "otp",
          isLoading: false,
        }));
        setSuccess(result.message);
        return result;
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Failed to send OTP";
        setError(message);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError, setSuccess]
  );

  const verifyOTP = useCallback(
    async (data: OTPVerificationData) => {
      setLoading(true);
      setError(null);

      try {
        const result = await AuthAPI.verifyOTP(data);
        setState((prev) => ({ ...prev, step: "reset", isLoading: false }));
        setSuccess("OTP verified successfully");
        return result;
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "OTP verification failed";
        setError(message);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError, setSuccess]
  );

  const resetPassword = useCallback(
    async (data: ResetPasswordData) => {
      setLoading(true);
      setError(null);

      try {
        const result = await AuthAPI.resetPassword(data);
        setState((prev) => ({ ...prev, step: "success", isLoading: false }));
        return result;
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Password reset failed";
        setError(message);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError]
  );

  const resendOTP = useCallback(async () => {
    if (!state.email) return;

    try {
      const result = await AuthAPI.sendPasswordResetOTP({ email: state.email });
      setSuccess("OTP resent successfully");
      return result;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to resend OTP";
      setError(message);
      throw error;
    }
  }, [state.email, setError, setSuccess]);

  const resetFlow = useCallback(() => {
    setState({
      step: "email",
      email: "",
      isLoading: false,
      error: null,
      success: null,
    });
  }, []);

  return {
    ...state,
    sendOTP,
    verifyOTP,
    resetPassword,
    resendOTP,
    resetFlow,
    setError,
    clearError: () => setError(null),
    clearSuccess: () => setSuccess(null),
  };
}
