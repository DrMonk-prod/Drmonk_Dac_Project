// src/components/RoleSwitcher.tsx
import { useRole } from "@/context/RoleContext";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function RoleSwitcher() {
  const { role, setRole } = useRole();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="bg-gray-800 py-1 px-2 h-8 text-gray-200"
        >
          {role}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48">
        <div className="flex flex-col gap-2">
          <Button
            variant={role === "ADMIN" ? "default" : "ghost"}
            onClick={() => setRole("ADMIN")}
          >
            Admin
          </Button>
          <Button
            variant={role === "DOCTOR" ? "default" : "ghost"}
            onClick={() => setRole("DOCTOR")}
          >
            Doctor
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
