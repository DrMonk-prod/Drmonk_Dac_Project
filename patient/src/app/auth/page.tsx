"use client";

import { TabsContent } from "@/components/ui/tabs";

import { TabsTrigger } from "@/components/ui/tabs";

import { TabsList } from "@/components/ui/tabs";

import { Tabs } from "@/components/ui/tabs";

import { useState } from "react";
import { AuthCard } from "@/components/ui/auth-card";
import { LoginForm } from "@/components/auth/login-form";
import { SignupForm } from "@/components/auth/signup-form";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200 dark:bg-black-alpha-500 py-12 px-4 sm:px-6 lg:px-8 w-full">
      <AuthCard
        title="Welcome"
        description="Sign in to your account or create a new one"
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-12 mb-8">
            <TabsTrigger className="active:bg-rose-500" value="login">
              Login
            </TabsTrigger>
            <TabsTrigger className="active:bg-rose-500" value="signup">
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <LoginForm />
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <SignupForm />
          </TabsContent>
        </Tabs>
      </AuthCard>
    </div>
  );
}
