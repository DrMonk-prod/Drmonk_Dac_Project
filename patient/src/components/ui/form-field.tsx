"use client";

import type React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  icon?: React.ReactNode;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  maxLength?: number;
  error?: string;
}

export function FormField({
  label,
  id,
  name,
  type = "text",
  placeholder,
  required = false,
  className = "",
  icon,
  showPasswordToggle = false,
  showPassword = false,
  onTogglePassword,
  maxLength,
  error,
}: FormFieldProps) {
  const inputType = showPasswordToggle
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-3 h-4 w-4 text-gray-400">
            {icon}
          </div>
        )}
        <Input
          id={id}
          name={name}
          type={inputType}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          className={`${icon ? "pl-10" : ""} ${
            showPasswordToggle ? "pr-10" : ""
          } ${className}`}
        />
        {showPasswordToggle && onTogglePassword && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={onTogglePassword}
          >
            {showPassword ? "🙈" : "👁️"}
          </Button>
        )}
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
