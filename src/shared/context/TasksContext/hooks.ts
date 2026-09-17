import { useContext } from "react";
import { TasksContext } from "./context";

export default function useTasks() {
  const context = useContext(TasksContext);
  if(context === undefined) throw new Error("useTasks hasn't been used with TasksContextProvider");
  
  return context;
}