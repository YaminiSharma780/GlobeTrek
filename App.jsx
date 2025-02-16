import { useState } from "react";
import "./App.css";
import CountriesList from "./components/CountriesList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectRegion from "./components/SelectRegion";
const App = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectRegion />
        </div>
        <div>
          <CountriesList query={query} />
        </div>
      </main>
    </>
  );
};
export default App;
