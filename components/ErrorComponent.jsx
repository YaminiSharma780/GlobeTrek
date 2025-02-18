import "../styles/ErrorComponent.css";
export default function ErrorComponent() {
  return (
    <>
      <div className="error-component-div">
        <div className="error-image-div">
          <img
            className="error-image"
            src="https://i.ibb.co/v30JLYr/Group-192-2.png"
            alt="error image"
          />
          <i id="flag-icon" className="fa-solid fa-flag fa-5x" />
        </div>
        <div className="error-text-div">
          <h1 className="error-heading">
            Looks like this content does not exist..
          </h1>
          <p className="error-text-1">
            The content you’re looking for doesn’t exist. Either it was removed,
            or you mistyped the link.
          </p>
          <p className="error-text-2">
            Sorry about that! Please visit our hompage to get where you need to
            go.
          </p>
        </div>
      </div>
    </>
  );
}
