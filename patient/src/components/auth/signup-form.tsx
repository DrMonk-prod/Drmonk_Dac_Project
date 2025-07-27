"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Loader2, Mail, Lock, User } from "lucide-react";
import type { SignupCredentials } from "@/types/auth";

interface SignupFormProps {
  onSubmit: (credentials: SignupCredentials) => Promise<void>;
  isLoading: boolean;
}

export function SignupForm({ onSubmit, isLoading }: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const credentials: SignupCredentials = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    await onSubmit(credentials);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <FormField
        label="Full Name"
        id="signup-name"
        name="name"
        placeholder="Enter your full name"
        icon={<User className="h-4 w-4" />}
        required
        className="w-full h-10 mt-2"
      />

      <FormField
        label="Email"
        id="signup-email"
        name="email"
        type="email"
        placeholder="Enter your email"
        icon={<Mail className="h-4 w-4" />}
        required
        className="w-full h-10 mt-2"
      />

      <FormField
        label="Password"
        id="signup-password"
        name="password"
        placeholder="Create a password"
        icon={<Lock className="h-4 w-4" />}
        showPasswordToggle
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
        required
        className="w-full h-10 mt-2"
      />

      <FormField
        label="Confirm Password"
        id="signup-confirm-password"
        name="confirmPassword"
        placeholder="Confirm your password"
        icon={<Lock className="h-4 w-4" />}
        showPasswordToggle
        showPassword={showConfirmPassword}
        onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
        required
        className="w-full h-10 mt-2"
      />

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-10 w-4 animate-spin" />}
        Create Account
      </Button>
    </form>
  );
}
