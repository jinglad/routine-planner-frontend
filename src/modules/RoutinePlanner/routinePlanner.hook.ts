import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { signOut, useSession } from "next-auth/react";
import { ICommonResponse } from "@/src/shared/interface";
import { RoutinePlannerService } from "./routinePlanner.service";
import { QueryKeys } from "@/src/shared/enum";
import { Dispatch, SetStateAction } from "react";

export const useAddLearningObjective = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: ILearningObjective) =>
      await RoutinePlannerService.addLearningObjective(data),
    onSuccess: () => {
      toast.success("Learning objective added successfully");
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.LEARNING_OBJECTIVES],
      });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });
};

export const useGetLearningObjectives = () => {
  const { data: session } = useSession();
  return useQuery<ICommonResponse<ILearningObjectiveResponse[]>>({
    queryKey: [QueryKeys.LEARNING_OBJECTIVES],
    queryFn: async () => await RoutinePlannerService.getLearningObjectives(),
    enabled: !!session,
  });
};

export const useAddAcademicTimings = ({ reset }: { reset: () => void }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: IAcademicTiming) =>
      await RoutinePlannerService.addAcademicTimings(data),
    onSuccess: () => {
      toast.success("Academic timing added successfully");
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.ACADEMIC_TIMINGS],
      });
      reset();
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });
};

export const useGetAcademicTimings = () => {
  const { data: session } = useSession();
  return useQuery<ICommonResponse<IAcademicTimingResponse[]>>({
    queryKey: [QueryKeys.ACADEMIC_TIMINGS],
    queryFn: async () => await RoutinePlannerService.getAcademicTimings(),
    enabled: !!session,
  });
};

export const useAddPartTimeJobInfo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: IPartTimeJob) =>
      await RoutinePlannerService.addPartTimeJobInfo(data),
    onSuccess: () => {
      toast.success("Part time job added successfully");
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PART_TIME_JOB],
      });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });
};

export const useGetPartTimeJobInfo = () => {
  const { data: session } = useSession();
  return useQuery<ICommonResponse<IPartTimeJob>>({
    queryKey: [QueryKeys.PART_TIME_JOB],
    queryFn: async () => await RoutinePlannerService.getPartTimeJobInfo(),
    enabled: !!session,
  });
};

export const useGenerateRoutine = ({
  setOpenRoutine,
  setRoutine,
}: {
  setOpenRoutine: Dispatch<SetStateAction<boolean>>;
  setRoutine: Dispatch<SetStateAction<ICommonResponse<IRoutine> | undefined>>;
}) => {
  return useMutation<ICommonResponse<IRoutine>>({
    mutationFn: async () => await RoutinePlannerService.generateRoutine(),
    onSuccess: (data) => {
      toast.success("Routine generated successfully");
      setOpenRoutine(true);
      setRoutine(data);
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });
};
