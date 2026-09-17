import { useState, type PropsWithChildren } from "react";
import type { Task } from "../../models";
import { TasksContext } from "./context";
import { createNewDate, getRandomInt } from "../../utils";
import { TaskListGroup, TaskStatus } from "../../types";

export default function TasksProvider({children}: PropsWithChildren) {
  const retrieveItemsFromLocalStorage = () => {
    const storedTasks: Task[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      if(localStorage.key(i) !== "theme"){
        const json = JSON.parse(localStorage.getItem(localStorage.key(i) || '') || '[]');
        storedTasks.push({id: Number(json.id), title: json.title, description: json.description, status: json.status, creationDate: json.creationDate});
      }
    }
    return storedTasks; 
  }

  const [tasks, setTasks] = useState<Task[]>(retrieveItemsFromLocalStorage());

  const [filter, setFilter] = useState<TaskListGroup>(TaskListGroup.ALL);

  const addTask = ({title, description}: Task) => {
    const task = {
      id: getRandomInt(1000000000),
      title: title,
      description: description,
      status: TaskStatus.TODO,
      creationDate: createNewDate(),
    }
    setTasks(prevTasks => [...prevTasks, task]);
    localStorage.setItem(String(task.id), JSON.stringify(task))
  }

  const checkTask = ({id, title, description, status, creationDate}: Task) => {
    const newStatus = () => status === TaskStatus.TODO ? TaskStatus.DONE : TaskStatus.TODO;
    const task = {
      id: id,
      title: title,
      description: description,
      status: newStatus(),
      creationDate: creationDate
    }
    setTasks(prevTasks => [...prevTasks.filter(x => x.id !== id), task]);
    for (let i=0; i<localStorage.length; i++){
      if(localStorage.key(i) !== "theme") {
        localStorage.setItem(String(id), JSON.stringify(task));
      }
    }
  }

  const deleteTask = ({id}: Task) => {
    setTasks(prevTasks => prevTasks.filter(x => x.id !== id));
    if(!localStorage) return;
    localStorage.removeItem(String(id));
  }

  const editTask = ({id, title, description, creationDate}: Task) => {
    const task = {
      id: id,
      title: title,
      description: description,
      creationDate: creationDate,
    }
    setTasks(prevTasks => [...prevTasks.filter(x => x.id !== id), task]);
    for (let i=0; i<localStorage.length; i++){
      if(localStorage.key(i) !== "theme") {
        localStorage.setItem(String(id), JSON.stringify(task));
      }
    }
  }

  return (
    <TasksContext.Provider value={{
      tasks,
      filter,
      setFilter,
      setTasks,
      addTask,
      checkTask,
      deleteTask,
      editTask,
    }}>
      {children}
    </TasksContext.Provider>
  );
}