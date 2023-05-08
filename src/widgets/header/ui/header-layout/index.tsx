import { AppBar, Toolbar, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

import { useAuth } from '@/entities/user';
import { LoginButton, LogoutButton, RegisterButton } from '@/features/auth';
import { ChangeLanguage } from '@/features/change-language';

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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GraphiQL
        </Typography>
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
