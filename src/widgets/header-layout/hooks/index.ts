import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { TypeAppRoute } from '@/shared/config';

export const useHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerShadow, setHeaderShadow] = useState(0);
  const location = useLocation();
  const headerRef = useRef<HTMLHeadingElement>(null);
  const elevationValue = location.pathname === TypeAppRoute.Welcome ? headerShadow : 4;

  const changeBackground = () => {
    if (headerRef.current && window.scrollY >= headerRef.current.offsetHeight) {
      setIsScrolled(true);
      setHeaderShadow(4);
    } else {
      setIsScrolled(false);
      setHeaderShadow(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return {
    isScrolled,
    elevationValue,
    headerRef,
  };
};
