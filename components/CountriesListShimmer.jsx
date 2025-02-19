export default function CountriesListShimmer() {
  return (
    <div className="countries-container">
      {Array.from({ length: 10 }).map((element, index) => {
        return <div key={index} className="country-card shimmer-card"></div>;
      })}
    </div>
  );
}
