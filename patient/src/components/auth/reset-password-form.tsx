"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Loader2, Lock } from "lucide-react";
import type { ResetPasswordData } from "@/types/auth";

interface ResetPasswordFormProps {
  email: string;
  onSubmit: (data: ResetPasswordData) => Promise<void>;
  isLoading: boolean;
}

export function ResetPasswordForm({
  email,
  onSubmit,
  isLoading,
}: ResetPasswordFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: ResetPasswordData = {
      email,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    await onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <FormField
        label="New Password"
        id="password"
        name="password"
        placeholder="Enter new password"
        icon={<Lock className="h-4 w-4" />}
        showPasswordToggle
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
        required
        className="w-full h-10 mt-2"
      />

      <p className="text-sm text-gray-500">
        Password must be at least 8 characters long
      </p>

      <FormField
        label="Confirm New Password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm new password"
        icon={<Lock className="h-4 w-4" />}
        showPasswordToggle
        showPassword={showConfirmPassword}
        onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
        required
        className="w-full h-10 mt-2"
      />

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Reset Password
      </Button>
    </form>
  );
}
