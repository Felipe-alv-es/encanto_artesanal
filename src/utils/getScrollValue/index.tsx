import { useState, useEffect } from "react";

export function useScrollValue() {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollValue(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollValue;
}
