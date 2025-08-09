"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Mail, Lock } from "lucide-react";
import { loginUser } from "@/lib/profileApi";
import { toast } from "sonner";
import { AuthUser, LoginCredentials } from "@/types/auth";
import { useRouter } from "next/navigation";
import { login } from "@/lib/authActions";
import { useDispatch } from "react-redux";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const navigate = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);

      const credentials: LoginCredentials = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };

      const data: AuthUser = await loginUser(credentials);

      if (data.role != "PATIENT") {
        toast.warning("Doctor and Admin login not allowed");
        navigate.push("/");
        return;
      }

      await login(dispatch, credentials);
      toast.success("Login successfull!");
      navigate.push("/");
    } catch (err) {
      console.error(err);
      toast.error("Invalid credentials. Try again!");
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-y-4">
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

      <Button type="submit" className=" h-10">
        Sign In
      </Button>
    </form>
  );
}
