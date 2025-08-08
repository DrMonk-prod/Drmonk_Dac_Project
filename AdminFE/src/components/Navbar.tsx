"use client";

import { useLocation } from "react-router-dom";

export default function Navbar() {
  // const { role, setRole } = useRole();
  const location = useLocation();
  const isRegisterPage = location.pathname === "/register";

  return (
    <nav className="bg-white border-b shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">FindDr Dashboard</h1>
    </nav>
  );
}
