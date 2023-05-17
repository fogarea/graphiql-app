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

  const changeBackground = ({ currentTarget: el }: HTMLElementEventMap['scroll']): void => {
    const flag = Boolean(
      headerRef.current && (el as HTMLDivElement)?.scrollTop >= headerRef.current.offsetHeight
    );

    setIsScrolled(flag);

    setHeaderShadow(Number(flag) * 4);
  };

  useEffect(() => {
    const rootElement = document.getElementById('root');

    rootElement?.addEventListener(
      'scroll',
      throttle<HTMLElementEventMap['scroll']>(changeBackground)
    );

    return () =>
      rootElement?.removeEventListener(
        'scroll',
        throttle<HTMLElementEventMap['scroll']>(changeBackground)
      );
  }, []);

  return {
    isScrolled,
    elevationValue,
    headerRef,
  };
};

// export const useHeader = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [headerShadow, setHeaderShadow] = useState(0);
//   const location = useLocation();
//   const headerRef = useRef<HTMLHeadingElement>(null);
//   const elevationValue = location.pathname === TypeAppRoute.Welcome ? headerShadow : 4;

//   const toggleState = (flag: boolean | null) => {
//     setIsScrolled(!flag);
//     setHeaderShadow(Number(!flag) * 4);
//   };

//   const changeBackground = (ev: HTMLElementEventMap['scroll']): void => {
//     const element = ev.currentTarget as HTMLDivElement;

//     toggleState(headerRef.current && element?.scrollTop >= headerRef.current.offsetHeight);
//   };

//   useEffect(() => {
//     const rootElement = document.getElementById('root');

//     rootElement?.addEventListener('scroll', changeBackground);

//     return () => rootElement?.removeEventListener('scroll', changeBackground);
//   }, []);

//   return {
//     isScrolled,
//     elevationValue,
//     headerRef,
//   };
// };
