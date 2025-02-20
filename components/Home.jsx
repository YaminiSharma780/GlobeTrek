import { useContext, useState, useEffect } from "react";
import "../App.css";
import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";
import SelectRegion from "./SelectRegion";
import { useOutletContext } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";
import { useWindowHeightAndWidth } from "../hooks/useWindowHeightAndWidth/useWindowHeightAndWidth";

export default function Home() {
  const [isDark] = useContext(ThemeContext);
  const [query, setQuery] = useState("");

  const windowSize = useWindowHeightAndWidth();

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div>
        <h1>
          Height: {windowSize.height} X Width: {windowSize.width}
        </h1>
      </div>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectRegion />
      </div>
      <div>
        <CountriesList query={query} />
      </div>
    </main>
  );
}
