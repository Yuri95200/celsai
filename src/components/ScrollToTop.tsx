
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure window scrolls to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use instant instead of smooth to prevent any animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
