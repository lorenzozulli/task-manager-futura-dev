import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Task } from "../../models";
import { TaskListGroup } from "../../types";

export const TasksContext = createContext<{
  tasks: Task[],
  filter: TaskListGroup,
  setFilter: Dispatch<SetStateAction<TaskListGroup>>,
  setTasks: Dispatch<SetStateAction<Task[]>>,
  addTask: ({title, description}: Task) => void,
  checkTask: ({id, title, description, status}: Task) => void,
  deleteTask: ({id}: Task) => void,
  editTask: ({id, title, description}: Task) => void,
  	}>({
  		tasks: [],
  		filter: TaskListGroup.ALL,
  		setFilter: () => {},
  		setTasks: () => {},
  		addTask: () => {},
  		checkTask: () => {},
  		deleteTask: () => {},
  		editTask: () => {},
  	});