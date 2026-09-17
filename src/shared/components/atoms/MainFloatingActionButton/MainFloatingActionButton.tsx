import './style.css';
import { useNavigate } from "react-router-dom";

export default function MainFloatingActionButton() {
  const navigate = useNavigate();
  return (
    <div 
      className='main-floating-action-button-container'
      onClick={() => navigate("/new")}>
      <div className='main-floating-action-button'>
        +
      </div>
    </div>
  )
}
