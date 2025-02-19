import { useState } from "react";
import "../App.css";
import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";
import SelectRegion from "./SelectRegion";
import { useOutletContext } from "react-router";

export default function Home() {
  const [isDark] = useOutletContext();
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
