"use client";

import { useState, useCallback } from "react";
import type {
  AuthState,
  LoginCredentials,
  SignupCredentials,
} from "@/types/auth";
import { AuthAPI } from "@/lib/auth-api";

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: false,
    error: null,
  });

  const setLoading = useCallback((loading: boolean) => {
    setState((prev) => ({ ...prev, isLoading: loading }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState((prev) => ({ ...prev, error }));
  }, []);

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      setLoading(true);
      setError(null);

      try {
        const result = await AuthAPI.login(credentials);
        setState((prev) => ({ ...prev, user: result.user, isLoading: false }));
        return result;
      } catch (error) {
        const message = error instanceof Error ? error.message : "Login failed";
        setError(message);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError]
  );

  const signup = useCallback(
    async (credentials: SignupCredentials) => {
      setLoading(true);
      setError(null);

      try {
        const result = await AuthAPI.signup(credentials);
        setLoading(false);
        return result;
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Signup failed";
        setError(message);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError]
  );

  const logout = useCallback(() => {
    setState({ user: null, isLoading: false, error: null });
  }, []);

  return {
    ...state,
    login,
    signup,
    logout,
    setError,
    clearError: () => setError(null),
  };
}
