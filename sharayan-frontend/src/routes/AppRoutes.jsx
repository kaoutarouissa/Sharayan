import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import AdminDashboard from "../pages/DashboardAdmin/Admin";
import Donneur from "../pages/DashboardDonneur/demandeDon"
import Patient from "../pages/DashboardPatient/DemandeTransffusion"
export default function AppRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/donneur/dashboard" element={<Donneur />} />
        <Route path="/patient/dashboard" element={<Patient />} />
      </Routes>
    
  );
}
