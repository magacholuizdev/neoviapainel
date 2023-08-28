import { useEffect, useState } from "react";

export const useWindowSize = () => {
  let defaultHeight;
  let defaultWidth;

  if (typeof window !== `undefined`) {
    defaultHeight = window.innerHeight;
    defaultWidth = window.innerWidth;
  }

  const [dimensions, setDimensions] = useState({
    windowHeight: defaultHeight,
    windowWidth: defaultWidth,
  });

  useEffect(() => {
    const handler = () =>
      setDimensions({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      });

    window.addEventListener(`resize`, handler);
    return () => window.removeEventListener(`resize`, handler);
  }, []);

  return dimensions;
};
