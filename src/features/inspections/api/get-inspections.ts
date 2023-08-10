import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/api-client";
import { Inspection } from "../types";

export function getInspections(): Promise<Inspection[]> {
  return apiClient.get("/inspections");
}

export function useInspections() {
  const { data, isFetching, isFetched } = useQuery({
    queryKey: ["inspections"],
    queryFn: getInspections,
    initialData: [],
  });

  return {
    data,
    isLoading: isFetching && !isFetched,
  };
}
