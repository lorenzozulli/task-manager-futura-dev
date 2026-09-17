import type { Task } from "../../../../shared/models";

export interface TaskFormProps {
  onAddTask:({title, description}: Task) => void;
}