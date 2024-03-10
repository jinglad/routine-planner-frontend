import { axiosInstanceWithAuth } from "@/src/http-config/axios.interceptor";
import { ICommonResponse } from "@/src/shared/interface";

const addLearningObjective = async (learningObjective: ILearningObjective) => {
  const axiosInstance = await axiosInstanceWithAuth();
  const result = await axiosInstance.post(
    "/api/v1/learning-objectives",
    learningObjective
  );
  return result;
};

const getLearningObjectives = async (): Promise<
  ICommonResponse<ILearningObjectiveResponse[]>
> => {
  const axiosInstance = await axiosInstanceWithAuth();
  const result = await axiosInstance.get("/api/v1/learning-objectives");
  return result.data;
};

export const LearningObjectiveService = {
  addLearningObjective,
  getLearningObjectives,
};
