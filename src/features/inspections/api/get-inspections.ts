import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/api-client";
import { InspectionDto } from "@/testing/mocks/db";

export function getInspections(): Promise<InspectionDto[]> {
  return apiClient.get("/jobs");
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
