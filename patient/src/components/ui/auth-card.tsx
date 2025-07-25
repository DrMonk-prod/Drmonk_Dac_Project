import type React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface AuthCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  error?: string | null;
  success?: string | null;
  className?: string;
}

export function AuthCard({
  title,
  description,
  children,
  error,
  success,
  className = "",
}: AuthCardProps) {
  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-transparent w-full max-w-lg py-12 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <Card className="w-full max-w-lg">
        <CardHeader className="gap-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            {title}
          </CardTitle>
          {description && (
            <CardDescription className="text-center">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {success && (
            <Alert className="mb-4">
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
