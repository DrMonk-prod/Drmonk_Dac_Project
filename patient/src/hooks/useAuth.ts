"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useAuth(redirectTo?: string) {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user && redirectTo) {
      router.replace(redirectTo);
    }
  }, [loading, user, redirectTo, router]);

  return { user, loading };
}
