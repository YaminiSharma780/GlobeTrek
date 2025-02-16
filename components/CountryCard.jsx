import React from "react";
export default function CountryCard({ name }) {
  return (
    <a className="country-card" href="/country/html?name=Barbados">
      <img src="https://flagcdn.com/bb.svg" alt="Barbados Flag" />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population:</b>2,87,371
        </p>
        <p>
          <b>Region:</b>Americas
        </p>
        <p>
          <b>Capital:</b>BridgeTown
        </p>
      </div>
    </a>
  );
}
