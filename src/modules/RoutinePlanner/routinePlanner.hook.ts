import { useMutation, useQuery } from "@tanstack/react-query";
import { LearningObjectiveService } from "./routinePlanner.service";
import { toast } from "react-toastify";

export const useAddLearningObjective = () => {
  return useMutation({
    mutationFn: async (data: any) =>
      await LearningObjectiveService.addLearningObjective(data),
    onSuccess: () => {
      toast.success("Learning objective added successfully");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });
};

export const useGetLearningObjectives = () => {
  return useQuery({
    queryKey: ["learningObjectives"],
    queryFn: async () => await LearningObjectiveService.getLearningObjectives(),
  });
};
