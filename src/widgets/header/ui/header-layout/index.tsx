import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useEffect, useRef, useState } from 'react';

import { useAuth } from '@/entities/user';
import { LoginButton, LogoutButton, RegisterButton } from '@/features/auth';
import { ChangeLanguage } from '@/features/change-language';
import { Logo } from '@/widgets/logo';
import styles from './styles.module.scss';

export const HeaderLayout = (): JSX.Element => {
  const { isAuth } = useAuth();
  const [scrollY, setScrollY] = useState(0);
  const [headerClasses, setHeaderClasses] = useState(`${styles.header}`);
  const headerRef = useRef<HTMLHeadingElement>(null);

  const headerRect = headerRef.current?.getBoundingClientRect();
  const handleScroll = () => setScrollY(window.scrollY);
  const pageOnTop = () => setHeaderClasses(`${styles.header}`);
  const pageIsScrolled = () => setHeaderClasses(`${styles.header} ${styles.headerScroll}`);

  useEffect(() => {
    if (headerRect && headerRect.height > window.scrollY) {
      pageOnTop();
    } else {
      pageIsScrolled();
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerRect, scrollY]);

  return (
    <AppBar position="sticky" ref={headerRef} className={headerClasses}>
      <Toolbar>
        <Logo />
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
    </AppBar>
  );
};
