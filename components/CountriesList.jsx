import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import ErrorComponent from "./ErrorComponent";
import CountriesListShimmer from "./CountriesListShimmer";

export default function CountriesList({ query }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFound, setIsFound] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((myData) => {
        setData(myData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setIsFound(false);
      });
  }, []);

  return isLoading ? (
    <CountriesListShimmer />
  ) : isFound ? (
    <div className="countries-container">
      {data
        .filter(
          (country) =>
            country.name.common.toLowerCase().includes(query) ||
            country.region.toLowerCase().includes(query)
        )
        .map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population.toLocaleString("en-IN")}
              region={country.region}
              capital={country.capital?.[0]}
              data={country}
            />
          );
        })}
    </div>
  ) : (
    <ErrorComponent />
  );
}
