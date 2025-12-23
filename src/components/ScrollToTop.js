import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ScrollToTop component: scrolls to top on route change
export default function ScrollToTop({ behavior = 'smooth' }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // small timeout to allow page rendering then scroll
    const id = setTimeout(() => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior });
      } catch (e) {
        window.scrollTo(0, 0);
      }
    }, 50);

    return () => clearTimeout(id);
  }, [pathname, behavior]);

  return null;
}
