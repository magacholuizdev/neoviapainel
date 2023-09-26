import { useEffect, useState } from "react";
import { useWindowSize } from "./useWindowSize";
import { breakpoints } from "../../styles/variables";

export const useIsMobile = () => {
  const { windowWidth, windowHeight } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (
      windowWidth &&
      windowHeight &&
      windowWidth < breakpoints.TABLET_NUMBER
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowWidth]);

  return isMobile;
};
