"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Loader2 } from "lucide-react";
import type { OTPVerificationData } from "@/types/auth";

interface OTPVerificationFormProps {
  email: string;
  onSubmit: (data: OTPVerificationData) => Promise<void>;
  onResend: () => Promise<void>;
  isLoading: boolean;
}

export function OTPVerificationForm({
  email,
  onSubmit,
  onResend,
  isLoading,
}: OTPVerificationFormProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: OTPVerificationData = {
      email,
      otp: formData.get("otp") as string,
    };

    await onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <FormField
        label="Enter OTP"
        id="otp"
        name="otp"
        placeholder="Enter 6-digit code"
        maxLength={6}
        className="text-center text-lg tracking-widest w-full h-10 mt-2"
        required
      />

      <p className="text-sm text-gray-500">
        OTP sent to: <span className="font-medium">{email}</span>
      </p>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Verify OTP
      </Button>

      <div className="text-center">
        <Button
          type="button"
          variant="link"
          onClick={onResend}
          disabled={isLoading}
          className="text-sm"
        >
          Didn't receive the code? Resend OTP
        </Button>
      </div>
    </form>
  );
}
