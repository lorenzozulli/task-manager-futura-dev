import { useState } from "react";
import "./style.css"
import type { TaskCardProps } from "./types"
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import useTasks from "../../../../../../shared/context/TasksContext/hooks";
import { TaskStatus } from "../../../../../../shared/types";

export default function TaskCard({task}: TaskCardProps) {
  const [taskClicked, setTaskClicked] = useState<boolean>(false);
  const { checkTask, deleteTask } = useTasks();
  const navigate = useNavigate();

  return (
    <div className="task-card-container">
      <div className="task-card-info-container" onClick={() => {setTaskClicked(!taskClicked)}}>
        <div className="checkbox-container">
          <input
            id={"checkbox" + String(task.id)}
            name="checkbox" 
            className="input-task-checkbox" 
            type="checkbox" 
            onChange={() => {
              setTaskClicked(!taskClicked); 
              checkTask(task);
            }} 
            checked={task.status === TaskStatus.DONE}/>
          {task.status === TaskStatus.DONE
            ? <del><label htmlFor={"checkbox" + String(task.id)} className="task-card-title">{task.title}</label></del>
            : <label htmlFor={"checkbox" + String(task.id)} className="task-card-title">{task.title}</label>
          }
        </div>
        {taskClicked
          ? <p className="task-card-description">{task.description}</p>
          : <p className="task-card-description" 
            style={{
              textOverflow: "ellipsis", 
              overflow: "hidden", 
              whiteSpace: "pre-wrap",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "1"
            }}>{task.description}</p>
        }
      </div>
      <button 
        popoverTarget={"popover" + String(task.id)} 
        className="popover-button"
        style={{anchorName: "--popover-menu" + String(task.id)}}>
        <IconDotsVertical />
      </button>
      <div 
        popover="auto" 
        id={"popover" + String(task.id)} 
        className="popover"
        style={{positionAnchor: "--popover-menu" + String(task.id)}}>
        <div className="menu-options-container">
          <span className="menu-option" onClick={() => {navigate(`/edit/id=${task.id}`)}}><IconEdit />&nbsp;Edit</span>
          <span className="menu-option" onClick={() => {deleteTask(task)}}><IconTrash />&nbsp;Delete</span>
        </div>
      </div>
    </div>
        
  )
}