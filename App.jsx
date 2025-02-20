import "./App.css";
import { Outlet } from "react-router";
import Header from "./components/Header";
import { MyThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <MyThemeProvider>
      <Header />
      <Outlet />
    </MyThemeProvider>
  );
};
export default App;
