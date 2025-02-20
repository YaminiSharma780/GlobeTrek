export default function CountriesListShimmer() {
  return (
    <div className="countries-container">
      {Array.from({ length: 10 }).map((element, index) => {
        return (
          <div key={index} className="country-card shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-heading"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text"></div>
          </div>
        );
      })}
    </div>
  );
}
