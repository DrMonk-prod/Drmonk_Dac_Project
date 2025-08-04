import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import AuthLayout from "./layout/Authlayout";
import AdminLayout from "./layout/Adminlayout";
import Home from "./pages/Home";
import { VerifiedTable } from "./pages/Verified";
import { PendingTable } from "./pages/Pending"; 
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<AuthLayout/>}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
         <Route index element={<Home />} />
         <Route path="verified" element={<VerifiedTable />} /> 
         <Route path="pending" element={<PendingTable />} /> 
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
