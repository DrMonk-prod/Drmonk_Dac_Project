interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: ("ADMIN" | "DOCTOR" | "PATIENT")[];
}

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth"; // Your custom auth hook
import Loader from "@/components/ui/loader";

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { user, loading } = useAuth(); // Assume useAuth returns user and loading state

  if (loading) {
    return <Loader />;
  }

  // User is logged in and has the allowed role
  if (user && allowedRoles.includes(user.role)) {
    return <Outlet />;
  }

  // User is logged in but doesn't have the allowed role
  if (user) {
    //create unauthorized page
    return <div>You are not authorized to view this page.</div>;
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
