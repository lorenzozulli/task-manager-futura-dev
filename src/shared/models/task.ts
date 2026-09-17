import type { TaskStatus } from "../types";

export interface Task {
  id?: number,
  title: string,
  description: string,
  status?: TaskStatus,
  creationDate: Date,
}