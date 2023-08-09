import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

require("@/testing/mocks/initialize");

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        fallback={<div>Error occured, please try later.</div>}
        onError={console.error}
      />
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
