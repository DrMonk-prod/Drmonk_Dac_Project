"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Loader2, Mail } from "lucide-react";
import type { ForgotPasswordData } from "@/types/auth";

interface ForgotPasswordFormProps {
  onSubmit: (data: ForgotPasswordData) => Promise<void>;
  isLoading: boolean;
}

export function ForgotPasswordForm({
  onSubmit,
  isLoading,
}: ForgotPasswordFormProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: ForgotPasswordData = {
      email: formData.get("email") as string,
    };

    await onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <FormField
        label="Email Address"
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email address"
        icon={<Mail className="h-4 w-4" />}
        required
        className="w-full h-10 mt-2"
      />

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Send OTP
      </Button>
    </form>
  );
}
