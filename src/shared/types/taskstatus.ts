export const TaskStatus = {
  DONE: "DONE",
  TODO: "TODO",
}

export type TaskStatus = typeof TaskStatus[keyof typeof TaskStatus];
