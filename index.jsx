import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import Home from "./components/Home";
import Error from "./components/Error";

const root = createRoot(document.querySelector("#root"));
root.render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} errorElement={<Error />}>
          <Route path="/" element={<Home />} />
          <Route path="/:country" element={<CountryDetail />} />
        </Route>
      </Routes>
    </Router>
  </>
);
