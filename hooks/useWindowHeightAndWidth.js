import { useEffect, useState } from "react";

export function useWindowHeightAndWidth() {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    });
  }, []);
  return windowSize;
}
