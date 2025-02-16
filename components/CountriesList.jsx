import data from "../data";
import CountryCard from "./CountryCard";
export default function CountriesList() {
  const arr = data.map((country) => {
    // console.log(country.name.common);
    return <CountryCard name={country.name.common} />;
  });
  return (
    <div className="countries-container">
      {[<CountryCard />, <CountryCard />, <CountryCard />]}
    </div>
  );
}
