import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

// Define the shape of the user object
export interface AuthUser {
  userId: number;
  token: string;
  role: "ADMIN" | "DOCTOR" | "PATIENT";
}

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  const userRole: "ADMIN" | "DOCTOR" | "PATIENT" | null = user
    ? user.role
    : null;

  // On initial load, check if user data exists in localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("userData");
      if (storedUser) {
        // Assume you also store the token
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
          setUser(JSON.parse(storedUser));
        }
      }
    } catch (e) {
      console.error("Failed to parse user data from localStorage", e);
    } finally {
      setLoading(false); // <-- Set loading to false once the check is complete
    }
  }, []);

  const login = (token: string, userData: AuthUser) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userData", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setUser(null);
    navigate("/");
  };

  return { user, userRole, loading, login, logout };
};
