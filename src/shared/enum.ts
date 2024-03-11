export enum Priority {
  HIGH = 3,
  MEDIUM = 2,
  LOW = 1,
}

export const getPriorityLabel = (priority: Priority) => {
  switch (priority) {
    case Priority.HIGH:
      return "High";
    case Priority.MEDIUM:
      return "Medium";
    case Priority.LOW:
      return "Low";
  }
};

export enum QueryKeys {
  ACADEMIC_TIMINGS = "academic-timings",
  LEARNING_OBJECTIVES = "learning-objectives",
  PART_TIME_JOB = "part-time-job",
}
