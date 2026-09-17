import { IconFilter } from "@tabler/icons-react";
import './style.css';
import { TaskListGroup } from "../../../types";
import useTasks from "../../../context/TasksContext/hooks";

export default function MiniFloatingActionButton() {
  const { setFilter } = useTasks();
  return (
    <button 
      popoverTarget="mini-floating-action-button-popover" 
      className='mini-floating-action-button-container'>
      {<IconFilter />}
      <div
        popover="auto" 
        id="mini-floating-action-button-popover" 
        className="mini-floating-action-button-filters" >
        <div>
          <span className="mini-fab-option" onClick={() => setFilter(TaskListGroup.ALL)}>All</span>
          <span className="mini-fab-option" onClick={() => setFilter(TaskListGroup.DONE)}>Done</span>
          <span className="mini-fab-option" onClick={() => setFilter(TaskListGroup.TODO)}>To-Do</span>
        </div>
      </div>
    </button>
  )
}
