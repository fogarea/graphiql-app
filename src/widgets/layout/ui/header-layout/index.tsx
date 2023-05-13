import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from '@mui/material/styles/styled';
import { useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';
import { useAuth } from '@/entities/user';
import { LoginButton, LogoutButton, RegisterButton } from '@/features/auth';
import { ChangeLanguage } from '@/features/change-language';
import { Logo } from '@/shared/ui';
import { useLocation } from 'react-router-dom';
import { TypeAppRoute } from '@/shared/config';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
}));

//TODO: refactor

export const HeaderLayout = (): JSX.Element => {
  const { isAuth } = useAuth();
  const [scrollY, setScrollY] = useState(0);
  const [headerClasses, setHeaderClasses] = useState(`${styles.header}`);
  const headerRef = useRef<HTMLHeadingElement>(null);

  const [headerShadow, setHeaderShadow] = useState(0);
  const location = useLocation();

  const headerRect = headerRef.current?.getBoundingClientRect();
  const handleScroll = () => setScrollY(window.scrollY);
  const pageOnTop = () => setHeaderClasses(`${styles.header}`);
  const pageIsScrolled = () => setHeaderClasses(`${styles.header} ${styles.headerScroll}`);

  useEffect(() => {
    if (headerRect && headerRect.height > window.scrollY) {
      pageOnTop();
      setHeaderShadow(0);
    } else {
      pageIsScrolled();
      setHeaderShadow(4);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerRect, scrollY]);

  return (
    <CustomAppBar
      position="sticky"
      ref={headerRef}
      className={headerClasses}
      elevation={location.pathname === TypeAppRoute.Welcome ? headerShadow : 4}
    >
      <Toolbar>
        <Logo withTitle />
        <ChangeLanguage />
        {isAuth ? (
          <LogoutButton />
        ) : (
          <>
            <LoginButton />
            <RegisterButton />
          </>
        )}
      </Toolbar>
    </CustomAppBar>
  );
};
