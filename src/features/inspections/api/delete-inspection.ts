import { UseMutateFunction, useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/api-client";
import { queryClient } from "@/lib/react-query";

export type DeleteHandler = UseMutateFunction<void, unknown, string, unknown>;

export function deleteInspection(inspectionId: string): Promise<void> {
  return apiClient.delete(`/inspections/${inspectionId}`);
}

type UseDeleteInspectionOptions = {
  onSuccess?: () => void;
};

export const useDeleteInspection = ({
  onSuccess,
}: UseDeleteInspectionOptions = {}) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: deleteInspection,
    onSuccess: () => {
      queryClient.invalidateQueries(["inspections"]);
      onSuccess?.();
    },
  });

  return { mutate, isLoading };
};
