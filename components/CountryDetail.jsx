import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CountryDetail.css";
import CountriesList from "./CountriesList";

export default function CountryDetail() {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };

  const countryName = new URLSearchParams(location.search).get("name");
  const [countryData, setCountryData] = useState({});
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data);
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population.toLocaleString("en-IN"),
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          tld: data.tld,
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", "),
          languages: Object.values(data.languages)[0],
          borders: data.borders
            ? data.borders.join(", ")
            : "No Border Countries",
          flagSrc: data.flags.svg,
          flagAlt: data.flags.alt,
        });
      });
  }, []);
  return countryData == null ? (
    "loading....."
  ) : (
    <main>
      <div className="country-details-container">
        <span onClick={routeChange} className="back-button">
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flagSrc} alt={`${countryData.flagAlt} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>Population: {countryData.population}</b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages}</b>
                <span className="languages"></span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: {countryData.borders} </b>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
