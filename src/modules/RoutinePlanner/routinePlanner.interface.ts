type ILearningObjective = {
  subject: string;
  priority: number;
};

type ILearningObjectiveResponse = ILearningObjective & {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
};

type IAcademicTiming = {
  subject: string;
  startTime: string;
  endTime: string;
  day: string;
};

type IAcademicTimingResponse = IAcademicTiming & {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
};

type IPartTimeJob = {
  hasPartTimeJob: boolean;
  startTime: string;
  endTime: string;
};

type IRoutine = {
  date: string;
  learningObjectives: {
    item: ILearningObjectiveResponse;
    sessionDuration: number;
  }[];
  academicTimings: {
    item: IAcademicTimingResponse;
    sessionDuration: number;
  }[];
  partTimeJobInfo: {
    item: IPartTimeJob;
    sessionDuration: number;
  };
}[];
