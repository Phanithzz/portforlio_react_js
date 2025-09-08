import { useEffect, useState } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollUp({ scrollContainerRef, isDesktop }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef?.current) {
        // For SimpleBar, we need to access the scroll element
        const scrollElement = scrollContainerRef.current.getScrollElement();
        setVisible(scrollElement.scrollTop > 300);
      } else {
        // For window scroll (mobile)
        setVisible(window.scrollY > 300);
      }
    };

    if (scrollContainerRef?.current) {
      // For SimpleBar container
      const scrollElement = scrollContainerRef.current.getScrollElement();
      scrollElement.addEventListener("scroll", handleScroll);
      return () => scrollElement.removeEventListener("scroll", handleScroll);
    } else {
      // For window scroll
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [scrollContainerRef]);

  const scrollToTop = () => {
    if (isDesktop && scrollContainerRef?.current) {
      // For SimpleBar, scroll the inner element
      const scrollElement = scrollContainerRef.current.getScrollElement();
      scrollElement.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // For window scroll (mobile)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Zoom in={visible}>
      <Fab
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          backgroundColor: '#3452ff',
          color: "white",
          zIndex: 2000,
          "&:hover": { backgroundColor: "black" },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}