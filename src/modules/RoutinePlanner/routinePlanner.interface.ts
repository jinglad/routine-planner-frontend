type ILearningObjective = {
  subject: string;
  priority: number;
};

type ILearningObjectiveResponse = {
  _id: string;
  subject: string;
  priority: number;
  user: string;
  createdAt: string;
  updatedAt: string;
};

type IAcademicTiming = {
  subject: string;
  startTime: string;
  endTime: string;
  day: string;
};
