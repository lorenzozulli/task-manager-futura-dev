import "./style.css";
import type { Task } from "../../../../shared/models";
import { useTaskForm } from "./hooks";

export default function TaskForm() {
  const { task, setTask, handleSubmit, navigate } = useTaskForm();


  return (
    <form className="task-form" name="task-form" onSubmit={(e) => {handleSubmit(e, task)}}>
      <textarea
        id="input-task-form-title" 
        placeholder="Title..."
        onChange={(e) => {setTask((prevTask: Task) => ({...prevTask, title: e.target.value.trimStart()}))}}
        value={task.title}
        required
      />

      <textarea 
        id="textarea-task-form-description"
        placeholder="Description..."
        onChange={(e) => {setTask((prevTask: Task) => ({...prevTask, description: e.target.value.trimStart()}))}}
        value={task.description}
      />

      <div className="task-form-button-container">
        <button className="button-task-form-cancel" type="button" onClick={() => {navigate(-1)}}>Cancel</button>
        <button className="button-task-form-submit" type="submit">Submit</button>
      </div>
    </form>
  )
}