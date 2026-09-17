import { Link } from "react-router-dom";
import "./style.css";

export default function NotFoundPage() {
  return (
    <div className="not-found-wrapper">
      <h1 className="h1-error-display">Error 404, page not found.</h1>
      <h3 className="h3-error-message">Does your URL exist?</h3>
      <Link to="/">
        <button className="button-go-home">Go Home</button>
      </Link>
    </div>
  );
}