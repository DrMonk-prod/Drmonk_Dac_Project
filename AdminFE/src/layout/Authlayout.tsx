import RoleSwitcher from "@/components/RoleSwitcher";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="fixed bottom-5 right-5 rounded-full">
        <RoleSwitcher />
      </div>
      <Outlet />
    </div>
  );
}
