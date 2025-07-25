"use client";

import { TabsContent } from "@/components/ui/tabs";

import { TabsTrigger } from "@/components/ui/tabs";

import { TabsList } from "@/components/ui/tabs";

import { Tabs } from "@/components/ui/tabs";

import { useState } from "react";
import { AuthCard } from "@/components/ui/auth-card";
import { LoginForm } from "@/components/auth/login-form";
import { SignupForm } from "@/components/auth/signup-form";
import { useAuth } from "@/hooks/use-auth";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [successMessage, setSuccessMessage] = useState("");
  const { login, signup, isLoading, error, clearError } = useAuth();

  const handleLogin = async (credentials: any) => {
    clearError();
    try {
      await login(credentials);
      // Handle successful login (redirect, etc.)
    } catch (err) {
      // Error is handled by the hook
    }
  };

  const handleSignup = async (credentials: any) => {
    clearError();
    try {
      const result = await signup(credentials);
      setSuccessMessage(result.message);
      setActiveTab("login");
    } catch (err) {
      // Error is handled by the hook
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200 dark:bg-black-alpha-500 py-12 px-4 sm:px-6 lg:px-8 w-full">
      <AuthCard
        title="Welcome"
        description="Sign in to your account or create a new one"
        error={error}
        success={successMessage}
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-12 mb-8">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <SignupForm onSubmit={handleSignup} isLoading={isLoading} />
          </TabsContent>
        </Tabs>
      </AuthCard>
    </div>
  );
}
