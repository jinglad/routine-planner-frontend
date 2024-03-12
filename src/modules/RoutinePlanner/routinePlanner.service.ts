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

const addAcademicTimings = async (academicTimings: IAcademicTiming) => {
  console.log(academicTimings);
  const axiosInstance = await axiosInstanceWithAuth();
  const result = await axiosInstance.post(
    "/api/v1/academic-timings",
    academicTimings
  );
  return result;
};

const getAcademicTimings = async (): Promise<
  ICommonResponse<IAcademicTimingResponse[]>
> => {
  const axiosInstance = await axiosInstanceWithAuth();
  const result = await axiosInstance.get("/api/v1/academic-timings");
  return result.data;
};

const addPartTimeJobInfo = async (partTimeJobInfo: IPartTimeJob) => {
  const axiosInstance = await axiosInstanceWithAuth();
  const result = await axiosInstance.post(
    "/api/v1/part-time-job-info",
    partTimeJobInfo
  );
  return result;
};

const getPartTimeJobInfo = async (): Promise<ICommonResponse<IPartTimeJob>> => {
  const axiosInstance = await axiosInstanceWithAuth();
  const result = await axiosInstance.get("/api/v1/part-time-job-info");
  return result.data;
};

const generateRoutine = async (): Promise<ICommonResponse<IRoutine>> => {
  const axiosInstance = await axiosInstanceWithAuth();
  const result = await axiosInstance.post("/api/v1/routine-generation");
  return result.data;
};

export const RoutinePlannerService = {
  addLearningObjective,
  getLearningObjectives,
  addAcademicTimings,
  getAcademicTimings,
  addPartTimeJobInfo,
  getPartTimeJobInfo,
  generateRoutine,
};
