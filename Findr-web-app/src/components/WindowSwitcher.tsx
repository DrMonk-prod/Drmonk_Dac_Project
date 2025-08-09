// src/components/RoleSwitcher.tsx
import { useCurrWindow } from "@/context/CurrWindowContext";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function WindowSwitcher() {
  const { currWindow, setCurrWindow } = useCurrWindow();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="bg-gray-800 py-1 px-5 rounded-full h-10 text-gray-200 hover:bg-slate-600 hover:text-gray-100 cursor-pointer"
        >
          {currWindow}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48">
        <div className="flex flex-col gap-2">
          <Button
            variant={currWindow === "ADMIN" ? "default" : "ghost"}
            onClick={() => setCurrWindow("ADMIN")}
          >
            Admin
          </Button>
          <Button
            variant={currWindow === "DOCTOR" ? "default" : "ghost"}
            onClick={() => setCurrWindow("DOCTOR")}
          >
            Doctor
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
