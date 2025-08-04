import { Outlet } from "react-router";
import Navbar from "@/components/Navbar";

import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <div className="w-64 bg-white border-r">
          <AppSidebar />
        </div>
        
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}
