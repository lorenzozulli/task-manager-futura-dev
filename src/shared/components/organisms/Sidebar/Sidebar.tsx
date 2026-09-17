import { useNavigate } from "react-router-dom";
import "./style.css";
import useTasks from "../../../context/TasksContext/hooks";
import { TaskListGroup } from "../../../types";
import { IconChevronDown, IconPlus } from "@tabler/icons-react";
import { useState, type BaseSyntheticEvent } from "react";

export default function Sidebar() {
  const { setFilter } = useTasks();
  const navigate = useNavigate();
  const [selectHTML, setSelectHTML] = useState("All");

  return (
    <div className="sidebar">
      <button className="button-add-task" onClick={() => {navigate("/new")}}>
        <IconPlus />
        Add Task
      </button>
      <select name="filters" className="select-filters" onChange={(e: BaseSyntheticEvent) => {
        setFilter(e.target.value);
        setSelectHTML(e.target.options[e.target.selectedIndex].text);
      }}>
        <button>
          {selectHTML}          
          <IconChevronDown />
        </button>
        <option className="select-option" value={TaskListGroup.ALL}>All</option>
        <option className="select-option" value={TaskListGroup.DONE}>Done</option>
        <option className="select-option" value={TaskListGroup.TODO}>To-Do</option>
      </select>
    </div>
  );
}