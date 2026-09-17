import useTasks from "../../../../shared/context/TasksContext/hooks";
import type { Task } from "../../../../shared/models"
import { TaskListGroup } from "../../../../shared/types";
import { TaskCard } from "./components/TaskCard"

export default function TaskList() {
  const { tasks, filter } = useTasks();

  return (
    tasks.filter((task) => filter === TaskListGroup.ALL || task.status === filter).sort((a, b) => new Date(a.creationDate).valueOf() - new Date(b.creationDate).valueOf()).map((task: Task) => (
      <TaskCard
        key={task.id}
        task={task}
      />
    ))
  );
}