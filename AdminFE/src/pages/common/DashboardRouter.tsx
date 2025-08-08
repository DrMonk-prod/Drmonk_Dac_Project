// src/pages/common/DashboardRouter.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRole } from "@/context/RoleContext";

export default function DashboardRouter() {
  const { role } = useRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (role === "ADMIN") navigate("/admin");
    else navigate("/doctor");
  }, [role, navigate]);

  return null;
}
