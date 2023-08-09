import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/api-client";
import { InspectionDto } from "@/testing/mocks/db";

type GetInspectionOptions = {
  inspectionId: string;
};

export function getInspection({
  inspectionId,
}: GetInspectionOptions): Promise<InspectionDto> {
  return apiClient.get(`/inspections/${inspectionId}`);
}

export function useInspection({ inspectionId }: GetInspectionOptions) {
  const { data, isLoading } = useQuery({
    queryKey: ["inspections", inspectionId],
    queryFn: () => getInspection({ inspectionId }),
  });

  return { data, isLoading };
}
