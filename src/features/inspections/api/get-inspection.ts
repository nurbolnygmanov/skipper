import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/api-client";
import { Inspection } from "../types";

type GetInspectionOptions = {
  inspectionId: string;
};

export function getInspection({
  inspectionId,
}: GetInspectionOptions): Promise<Inspection> {
  return apiClient.get(`/inspections/${inspectionId}`);
}

export function useInspection({ inspectionId }: GetInspectionOptions) {
  const { data, isLoading } = useQuery({
    queryKey: ["inspections", inspectionId],
    queryFn: () => getInspection({ inspectionId }),
  });

  return { data, isLoading };
}
