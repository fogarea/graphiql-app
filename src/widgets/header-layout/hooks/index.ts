import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { TypeAppRoute } from '@/shared/config';
import { throttle } from '@/shared/lib';

export const useHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerShadow, setHeaderShadow] = useState(0);
  const location = useLocation();
  const headerRef = useRef<HTMLHeadingElement>(null);

  const elevationValue = location.pathname === TypeAppRoute.Welcome ? headerShadow : 4;

  const changeBackground = ({ currentTarget: ct }: TypeEventScroll): void => {
    const flag = Boolean(
      headerRef.current && (ct as HTMLDivElement)?.scrollTop >= headerRef.current.offsetHeight
    );

    setIsScrolled(flag);

    setHeaderShadow(Number(flag) * 4);
  };

  useEffect(() => {
    const rootElement = document.getElementById('root');

    rootElement?.addEventListener('scroll', throttle<TypeEventScroll>(changeBackground));

    return () =>
      rootElement?.removeEventListener('scroll', throttle<TypeEventScroll>(changeBackground));
  }, []);

  return {
    isScrolled,
    elevationValue,
    headerRef,
  };
};

type TypeEventScroll = HTMLElementEventMap['scroll'];
