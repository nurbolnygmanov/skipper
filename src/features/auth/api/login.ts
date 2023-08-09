import { apiClient } from "@/lib/api-client";
import { AuthUser, LoginData } from "../types";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

function login(data: LoginData): Promise<{ user: AuthUser }> {
  return apiClient.post("/auth/login", data);
}

type UseLoginOptions = {
  onSuccess?: (user: AuthUser) => void;
};

export function useLogin({ onSuccess }: UseLoginOptions) {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["auth-user"], user);
      console.log(user);
      onSuccess?.(user);
    },
  });

  return { submit, isLoading };
}
