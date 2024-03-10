import { useMutation, useQuery } from "@tanstack/react-query";
import { LearningObjectiveService } from "./routinePlanner.service";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { ICommonResponse } from "@/src/shared/interface";

export const useAddLearningObjective = () => {
  return useMutation({
    mutationFn: async (data: ILearningObjective) =>
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
  const { data: session } = useSession();
  return useQuery<ICommonResponse<ILearningObjectiveResponse[]>>({
    queryKey: ["learningObjectives"],
    queryFn: async () => await LearningObjectiveService.getLearningObjectives(),
    enabled: !!session,
  });
};
