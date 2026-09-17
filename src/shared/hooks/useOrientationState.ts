import { useEffect, useState } from "react";
import { OrientationState } from "./types";

export default function useOrientationState() {
  const setUpOrientation = () => {
    if(window.innerHeight<window.innerWidth) return OrientationState.LANDSCAPE;
    else return OrientationState.PORTRAIT;
  }
  
  const [orientationState, setOrientationState] = useState<OrientationState>(setUpOrientation());

  useEffect(() => {
    const handleResize = () => {
      if(window.innerHeight<window.innerWidth) setOrientationState(OrientationState.LANDSCAPE);
      else setOrientationState(OrientationState.PORTRAIT);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  },[]);
  
  return orientationState;
}
