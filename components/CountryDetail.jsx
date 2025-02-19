import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useOutletContext, useParams } from "react-router-dom";
import "../styles/CountryDetail.css";
import LoadingComponent from "./LoadingComponent";
import ErrorComponent from "./ErrorComponent";

export default function CountryDetail() {
  const [isDark] = useOutletContext();
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };

  const params = useParams();
  const countryName = params.country;

  const { state } = useLocation();

  const [countryData, setCountryData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isFound, setIsFound] = useState(true);

  function updateCountryData(data) {
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
      borders: data.borders || [],
      flagSrc: data.flags.svg,
      flagAlt: data.flags.alt,
    });
    setIsLoading(false);
    // map won't work for undefined so provided []
    if (!data.borders) {
      data.borders = [];
    }
    // map returning all borders promises therefore used Promise.all()
    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setTimeout(() => {
        setCountryData((prevState) => ({ ...prevState, borders }));
      });
    });
  }

  useEffect(() => {
    setIsLoading(true);

    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsFound(false);
      });
  }, [countryName]);
  return isLoading ? (
    <div className="country-details-container">
      <span onClick={() => history.back()} className={`back-button ${isDark ? "dark" : ""}`}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>
      <LoadingComponent />
    </div>
  ) : isFound ? (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span onClick={() => history.back()} className={`back-button ${isDark ? "dark" : ""}`}>
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
            {Array.isArray(countryData.borders) &&
              countryData.borders.length > 0 && (
                <div className="border-countries">
                  <b>Border Countries: </b>&nbsp;
                  {countryData.borders.map((border) => (
                    <Link key={border} to={`/${border}`}>
                      {border}
                    </Link>
                  ))}
                </div>
              )}
          </div>
        </div>
      </div>
    </main>
  ) : (
    <div className="country-details-container">
      <span onClick={routeChange} className={`back-button ${isDark ? "dark" : ""}`}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>
      <ErrorComponent />
    </div>
  );
}
