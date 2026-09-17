import { Outlet } from "react-router-dom";
import { Header } from "../../molecules";
import { Sidebar } from "../Sidebar";
import "./style.css";
import useOrientationState from "../../../hooks/useOrientationState";
import { OrientationState } from "../../../hooks/types";

export default function AppLayout() {
  const orientationState = useOrientationState();
  return (
    <div className="app-layout-wrapper">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="content-wrapper">
        {orientationState === OrientationState.LANDSCAPE &&
          <div className="sidebar-wrapper">
          	<Sidebar />
          </div>
        }
        <div className="main-content-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  )
}