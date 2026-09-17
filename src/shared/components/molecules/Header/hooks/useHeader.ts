import { useState, useEffect } from "react";
import { ThemeState } from "../types";

export default function useHeader() {
  const [theme, setTheme] = useState<ThemeState>(
    localStorage.getItem("theme") === null || localStorage.getItem("theme") === "light" ? ThemeState.LIGHT : ThemeState.DARK
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("body")?.setAttribute("data-theme", theme);
  },[theme])

  return {
    theme,
    setTheme
  };

}