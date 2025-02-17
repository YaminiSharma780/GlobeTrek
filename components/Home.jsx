import { useState } from "react";
import "../App.css";
import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";
import SelectRegion from "./SelectRegion";

export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <main>
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
