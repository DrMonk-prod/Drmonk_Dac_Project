import { DoctorSideBar } from "@/components/DoctorSideBar";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

function Doctorlayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <div className="w-64 bg-white border-r">
          <DoctorSideBar />
        </div>

        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Doctorlayout;
