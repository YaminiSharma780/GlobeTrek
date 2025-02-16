import React from "react";
import data from "../data";
import CountryCard from "./CountryCard";
export default function CountriesList() {
  const arr = data.map((country) => {
    return (
      <CountryCard
        key={country.name.common}
        name={country.name.common}
        flag={country.flags.svg}
        population={country.population.toLocaleString("en-IN")}
        region={country.region}
        capital={country.capital?.[0]}
      />
    );
  });
  return <div className="countries-container">{arr}</div>;
}
