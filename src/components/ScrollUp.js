import { useEffect, useState } from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollUp({ scrollContainerRef, isDesktop }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let scrollEl = scrollContainerRef?.current?.getScrollElement?.() || window;
      const scrollTop =
      scrollEl?.scrollTop || window.scrollY;
      setVisible(scrollTop > 300);
    };

    const timer = setTimeout(() => {
      const scrollEl = scrollContainerRef?.current?.getScrollElement?.() || window;
      scrollEl.addEventListener('scroll', handleScroll);
    }, 50);

    return () => {
      clearTimeout(timer);
      const scrollEl = scrollContainerRef?.current?.getScrollElement?.() || window;
      scrollEl.removeEventListener('scroll', handleScroll);
    };
  }, [scrollContainerRef]);

  const scrollToTop = () => {
    if (isDesktop && scrollContainerRef?.current?.getScrollElement) {
      scrollContainerRef.current.getScrollElement().scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Zoom in={visible}>
      <Fab
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: '#3452ff',
          color: 'white',
          zIndex: 2000,
          '&:hover': { backgroundColor: 'black' },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}
