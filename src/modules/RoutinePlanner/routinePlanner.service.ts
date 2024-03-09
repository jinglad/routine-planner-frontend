import { axiosInstanceWithAuth } from "@/src/http-config/axios.interceptor";

const addLearningObjective = async (learningObjective: ILearningObjective) => {
  const axiosInstance = await axiosInstanceWithAuth();
  const result = await axiosInstance.post(
    "/api/v1/learning-objectives",
    learningObjective
  );
  return result;
};

const getLearningObjectives = async () => {
  const axiosInstance = await axiosInstanceWithAuth();
  const result = await axiosInstance.get("/api/v1/learning-objectives");
  return result;
};

export const LearningObjectiveService = {
  addLearningObjective,
  getLearningObjectives,
};
