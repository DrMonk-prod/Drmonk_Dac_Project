// src/App.tsx
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import { CurrWindowProvider } from "@/context/CurrWindowContext"; // Adjust path if different

import "./App.css";
import AuthLayout from "./layout/Authlayout";
import AdminLayout from "./layout/Adminlayout";
import DoctorLayout from "./layout/Doctorlayout";
import Home from "./pages/admin/Home";
import { VerifiedTable } from "./pages/admin/Verified";
import { PendingTable } from "./pages/admin/Pending";
// import DashboardRouter from "./pages/common/DashboardRouter";
import Navbar from "./components/Navbar";
import DoctorHome from "./pages/doctor/Home";
import ProtectedRoute from "@/components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Admin Protected Routes */}
      <Route
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Home />} />
          <Route path="verified" element={<VerifiedTable />} />
          <Route path="pending" element={<PendingTable />} />
        </Route>
      </Route>

      {/* Doctor Protected Routes */}
      <Route
        element={
          <ProtectedRoute allowedRoles={["DOCTOR"]}>
            <DoctorLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/doctor" element={<DoctorLayout />}>
          <Route index element={<DoctorHome />} />
        </Route>
      </Route>

      {/* Catch-all for unhandled paths */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

function App() {
  return (
    <CurrWindowProvider>
      <Navbar />
      <AppRoutes />
    </CurrWindowProvider>
  );
}

export default App;
