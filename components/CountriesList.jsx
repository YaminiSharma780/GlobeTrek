import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import LoadingComponent from "./LoadingComponent";

export default function CountriesList({ query }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((myData) => {
        setData(myData);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <LoadingComponent />
  ) : (
    <div className="countries-container">
      {data
        .filter((country) => country.name.common.toLowerCase().includes(query))
        .map((country) => {
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
        })}
    </div>
  );
}
