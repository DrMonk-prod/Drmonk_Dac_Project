"use client";

import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRole } from "@/context/RoleContext";
import { loginUser } from "@/lib/api";

export default function Login() {
  const { role } = useRole();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginUser({
        email,
        password,
      });

      console.log(response);
      if (role === "ADMIN") navigate("/admin");
      else navigate("/doctor");
    } catch (err) {
      console.error(err);
      setError("Login failed. Try again.");
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 w-full">
          <CardTitle>Login to your account</CardTitle>
          <div className="text-sm text-muted-foreground">
            {role === "DOCTOR" && (
              <Link to="/register">
                <Button variant="link">Sign Up</Button>
              </Link>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4">
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleLogin}>
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}
