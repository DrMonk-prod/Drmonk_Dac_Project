import { SquircleDashed } from "lucide-react";

function Loader() {
  return (
    <div className="min-h-[600px] w-full flex flex-col gap-x-3 justify-center items-center">
      <span>Loading...</span>
      <SquircleDashed className="animate-spin stroke-blue-600" size={40} />{" "}
    </div>
  );
}

export default Loader;
