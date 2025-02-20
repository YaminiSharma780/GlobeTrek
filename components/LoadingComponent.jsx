import { Mosaic } from "react-loading-indicators";
import "../styles/LoadingComponent.css";
import { useMyTheme } from "../hooks/useMyTheme";
import { useNavigate } from "react-router";
export default function LoadingComponent() {
  const [isDark] = useMyTheme();
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span
          onClick={routeChange}
          className={`back-button ${isDark ? "dark" : ""}`}
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="loading-component">
          <Mosaic color="#706dbf" size="small" text="" textColor="" />
        </div>
      </div>
    </main>
  );
}
