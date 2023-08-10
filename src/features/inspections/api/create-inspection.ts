import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/api-client";
import { queryClient } from "@/lib/react-query";

import { Inspection, CreateInspectionData } from "../types";

type CreateInspectionOptions = {
  data: CreateInspectionData;
};

export const createInspection = ({
  data,
}: CreateInspectionOptions): Promise<Inspection> => {
  return apiClient.post(`/inspections`, data);
};

type UseCreateInspectionOptions = {
  onSuccess?: (inspection: Inspection) => void;
};

export const useCreateInspection = ({
  onSuccess,
}: UseCreateInspectionOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: createInspection,
    onSuccess: (inspection) => {
      queryClient.invalidateQueries(["inspections"]);
      onSuccess?.(inspection);
    },
  });

  return { submit, isLoading };
};
