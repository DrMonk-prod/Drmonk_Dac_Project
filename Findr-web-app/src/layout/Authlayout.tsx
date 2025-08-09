import WindowSwitcher from "@/components/WindowSwitcher";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router";

export default function AuthLayout() {
  const { loading, user } = useAuth();

  // If the user is authenticated, redirect them based on their role
  if (!loading && user) {
    if (user.role === "ADMIN") {
      return <Navigate to="/admin" replace />;
    }
    if (user.role === "DOCTOR") {
      return <Navigate to="/doctor" replace />;
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="fixed bottom-5 right-5 rounded-full">
        <WindowSwitcher />
      </div>
      <Outlet />
    </div>
  );
}
