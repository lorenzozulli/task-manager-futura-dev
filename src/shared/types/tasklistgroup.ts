export const TaskListGroup = {
  ALL: "ALL",
  DONE: "DONE",
  TODO: "TODO",
}

export type TaskListGroup = typeof TaskListGroup[keyof typeof TaskListGroup];
