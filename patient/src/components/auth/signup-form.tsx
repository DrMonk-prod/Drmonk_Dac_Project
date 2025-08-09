"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Mail, Lock, User } from "lucide-react";
import type { SignupCredentials } from "@/types/auth";
import { register } from "@/lib/profileApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const credentials: SignupCredentials = {
        fullName: formData.get("name") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        confirmPassword: formData.get("confirmPassword") as string,
      };

      if (credentials.confirmPassword !== credentials.password) {
        toast.warning("Password and confirm password are not same!!");
        return;
      }

      await register({ ...credentials, role: "PATIENT" });
      toast.success("Sign up successfull!!");
      navigate.push("/auth");
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
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

      <Button type="submit" className="w-full text-gray-100">
        Create Account
      </Button>
    </form>
  );
}
