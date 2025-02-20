import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// export function useMyTheme() {
//   const [isDark, setIsDark] = useContext(ThemeContext);
//   return [isDark, setIsDark];
// }

// export function useMyTheme() {
//   return useContext(ThemeContext);
// }

export const useMyTheme = () => useContext(ThemeContext);
