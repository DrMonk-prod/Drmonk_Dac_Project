import { Outlet } from "react-router";

function Doctorlayout() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Outlet />
    </div>
  );
}

export default Doctorlayout;
