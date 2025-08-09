"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  name?: string;
  defaultValue?: string;
  placeholder?: string;
};

export default function GenderSelect({
  name = "gender",
  defaultValue = "",
  placeholder = "Select gender",
}: Props) {
  const [value, setValue] = useState<string>(defaultValue);

  return (
    <div>
      <input type="hidden" name={name} value={value} />
      <Select value={value || undefined} onValueChange={setValue}>
        <SelectTrigger aria-label="Gender">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="MALE">Male</SelectItem>
          <SelectItem value="FEMALE">Female</SelectItem>
          <SelectItem value="OTHER">Other</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
