"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Loader2, Mail, Lock } from "lucide-react";
import type { LoginCredentials } from "@/types/auth";

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => Promise<void>;
  isLoading: boolean;
}

export function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const credentials: LoginCredentials = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    await onSubmit(credentials);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <FormField
        label="Email"
        id="login-email"
        name="email"
        type="email"
        placeholder="Enter your email"
        icon={<Mail className="h-4 w-4" />}
        required
        className="w-full h-10 mt-2"
      />

      <FormField
        label="Password"
        id="login-password"
        name="password"
        placeholder="Enter your password"
        icon={<Lock className="h-4 w-4" />}
        showPasswordToggle
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
        required
        className="w-full h-10 mt-2"
      />

      <div className="flex items-center justify-between">
        <Link
          href="/auth/forgot-password"
          className="text-sm text-cyan-500 hover:text-blue-500"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" className=" h-10" disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Sign In
      </Button>
    </form>
  );
}
