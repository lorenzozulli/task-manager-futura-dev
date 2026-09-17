import { MainFloatingActionButton, MiniFloatingActionButton } from "../../shared/components";
import { OrientationState } from "../../shared/hooks/types";
import useOrientationState from "../../shared/hooks/useOrientationState";
import { TaskList } from "./components/TaskList";
import "./style.css"

export default function Home() {
  const orientationState = useOrientationState();
  return (
    <>
      <div className="home-wrapper">
        <TaskList />
      </div>
      {orientationState === OrientationState.PORTRAIT && 
        <div className="floating-action-buttons-container">
        	<MiniFloatingActionButton />
        	<MainFloatingActionButton />
        </div>
      }
    </>
  )
}