import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });

    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-NHBCLRNZ8E', {
        page_path: pathname + search,
        page_title: document.title,
      });
    }
  }, [pathname, search]);

  return null;
};

