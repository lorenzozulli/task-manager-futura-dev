import { IconMoon, IconRosetteDiscountCheck, IconSun } from "@tabler/icons-react";
import "./style.css"
import { Link } from "react-router-dom";
import { ThemeState } from "./types";
import useHeader from "./hooks/useHeader";

export default function Header() {
  const {
    theme,
    setTheme
  } = useHeader();
  
  return (
    <header>
      <Link to="/">
        <div className="info-container">
          <div className="icon-container"><IconRosetteDiscountCheck /></div>
          <h2 className="title-container">Task Manager</h2>
        </div>
      </Link>
      <div className="theme-button-container">
        <button 
          className="button-theme-switcher"
          onClick={() => {
            setTheme(prevTheme => prevTheme === ThemeState.LIGHT ? ThemeState.DARK : ThemeState.LIGHT);
            if(!localStorage) return;
            localStorage.setItem("theme", theme);
            document.querySelector("body")?.setAttribute("data-theme", theme);
          }}>
          {theme === ThemeState.LIGHT ? <IconMoon /> : <IconSun />}
        </button>
      </div>
    </header>
  )
}
