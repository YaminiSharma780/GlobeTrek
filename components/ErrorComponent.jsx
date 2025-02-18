import "../styles/ErrorComponent.css";
export default function ErrorComponent() {
  return (
    <>
      <div className="error-component-div">
        <div className="error-div">
          <i id="flag-icon" className="fa-solid fa-sailboat fa-5x" />
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
