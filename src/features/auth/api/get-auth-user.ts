import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/api-client";

import { AuthUser } from "../types";

export function getAuthUser(): Promise<AuthUser> {
  return apiClient.get("/auth/me");
}

export function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["auth-user"],
    queryFn: getAuthUser,
  });

  return { data, isLoading };
}
