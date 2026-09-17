import { useLocation, useNavigate } from "react-router-dom";
import useTasks from "../../../../../shared/context/TasksContext/hooks";
import type { Task } from "../../../../../shared/models";
import { useState, type BaseSyntheticEvent } from "react";

export default function useTaskForm() {
  const { addTask, editTask } = useTasks();
  const navigate = useNavigate();
  const location = useLocation();

  const retrieveTaskToEdit = () => {
    if(location.pathname === "/new") return {title: "", description: "", creationDate: new Date};
    return JSON.parse(localStorage.getItem(location.pathname.replace("/edit/id=", "")) || "");
  }

  const [task, setTask] = useState(retrieveTaskToEdit());


  const handleSubmit = (e: BaseSyntheticEvent, {id, title, description}: Task) => {
    e.preventDefault();
    if(location.pathname === "/new") addTask({title: title, description: description, creationDate: new Date()});
    else editTask({id: id, title: title, description: description, creationDate: new Date()});

    navigate(-1);
  }

  return { task, setTask, handleSubmit, navigate };
  

}
