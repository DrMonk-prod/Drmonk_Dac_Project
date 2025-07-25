"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuthCard } from "@/components/ui/auth-card";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import { OTPVerificationForm } from "@/components/auth/otp-verification-form";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";
import { SuccessScreen } from "@/components/auth/success-screen";
import { usePasswordReset } from "@/hooks/use-password-reset";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const {
    step,
    email,
    isLoading,
    error,
    success,
    sendOTP,
    verifyOTP,
    resetPassword,
    resendOTP,
    clearError,
  } = usePasswordReset();

  const handleSendOTP = async (data: any) => {
    clearError();
    try {
      await sendOTP(data);
    } catch (err) {
      // Error handled by hook
    }
  };

  const handleVerifyOTP = async (data: any) => {
    clearError();
    try {
      await verifyOTP(data);
    } catch (err) {
      // Error handled by hook
    }
  };

  const handleResetPassword = async (data: any) => {
    clearError();
    try {
      await resetPassword(data);
    } catch (err) {
      // Error handled by hook
    }
  };

  const handleResendOTP = async () => {
    clearError();
    try {
      await resendOTP();
    } catch (err) {
      // Error handled by hook
    }
  };

  const getTitle = () => {
    switch (step) {
      case "email":
        return "Forgot Password";
      case "otp":
        return "Verify OTP";
      case "reset":
        return "Reset Password";
      case "success":
        return "Success";
      default:
        return "Forgot Password";
    }
  };

  const getDescription = () => {
    switch (step) {
      case "email":
        return "Enter your email address and we'll send you an OTP to reset your password.";
      case "otp":
        return "Enter the 6-digit code sent to your email address.";
      case "reset":
        return `Enter your new password for ${email}`;
      case "success":
        return "";
      default:
        return "";
    }
  };

  const renderContent = () => {
    switch (step) {
      case "email":
        return (
          <ForgotPasswordForm onSubmit={handleSendOTP} isLoading={isLoading} />
        );

      case "otp":
        return (
          <OTPVerificationForm
            email={email}
            onSubmit={handleVerifyOTP}
            onResend={handleResendOTP}
            isLoading={isLoading}
          />
        );

      case "reset":
        return (
          <ResetPasswordForm
            email={email}
            onSubmit={handleResetPassword}
            isLoading={isLoading}
          />
        );

      case "success":
        return (
          <SuccessScreen
            title="Password Reset Successful!"
            message="Your password has been successfully reset. You can now sign in with your new password."
            buttonText="Back to Sign In"
            buttonHref="/auth"
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-black-alpha-500 py-12 px-4 sm:px-6 lg:px-8 w-full">
      <AuthCard
        title={getTitle()}
        description={getDescription()}
        error={error}
        success={success}
      >
        {step !== "success" && (
          <div className="flex items-center space-x-2 mb-4">
            <Link href="/auth">
              <Button variant="ghost" size="sm" className="p-0">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}

        {renderContent()}

        {step === "reset" && (
          <div className="mt-4 text-center">
            <Link
              href="/auth"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Back to Sign In
            </Link>
          </div>
        )}
      </AuthCard>
    </div>
  );
}
