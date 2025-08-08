// src/App.tsx
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import { useRole } from "@/context/RoleContext"; // Adjust path if different

import "./App.css";
import AuthLayout from "./layout/Authlayout";
import AdminLayout from "./layout/Adminlayout";
import DoctorLayout from "./layout/Doctorlayout";
import Home from "./pages/admin/Home";
import { VerifiedTable } from "./pages/admin/Verified";
import { PendingTable } from "./pages/admin/Pending";
import { RoleProvider } from "./context/RoleContext";
import DashboardRouter from "./pages/common/DashboardRouter";
import Navbar from "./components/Navbar";
import DoctorHome from "./pages/doctor/Home";

function AppRoutes() {
  const { role } = useRole();

  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* <Route path="/dashboard" element={<DashboardRouter />} /> */}

      {role === "DOCTOR" && (
        <Route path="/doctor" element={<DoctorLayout />}>
          <Route index element={<DoctorHome />} />
          {/* <Route path="appointments" element={<VerifiedTable />} /> */}
          {/* <Route path="appointments/pending" element={<PendingTable />} /> */}
        </Route>
      )}

      {role === "ADMIN" && (
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Home />} />
          <Route path="verified" element={<VerifiedTable />} />
          <Route path="pending" element={<PendingTable />} />
        </Route>
      )}
    </Routes>
  );
}

function App() {
  return (
    <RoleProvider>
      <Navbar />
      <AppRoutes />
    </RoleProvider>
  );
}

export default App;
