import { useContext, useState, useEffect } from "react";
import "../App.css";
import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";
import SelectRegion from "./SelectRegion";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
  const [isDark] = useContext(ThemeContext);
  const [query, setQuery] = useState("");

  return (
    <main className={`${isDark ? "dark" : ""}`}>
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
