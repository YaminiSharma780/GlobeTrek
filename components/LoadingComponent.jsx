import { Mosaic } from "react-loading-indicators";
import "../styles/LoadingComponent.css";
export default function LoadingComponent() {
  return (
    <div className="loading-component">
      <Mosaic color="#706dbf" size="small" text="" textColor="" />
    </div>
  );
}
