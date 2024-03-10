export enum Priority {
  HIGH = 1,
  MEDIUM = 2,
  LOW = 3,
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
