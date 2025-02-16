import "./App.css";
import CountriesList from "./components/CountriesList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectRegion from "./components/SelectRegion";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar />
          <SelectRegion />
        </div>
        <div>
            <CountriesList/>
        </div>
      </main>
    </>
  );
};
export default App;
