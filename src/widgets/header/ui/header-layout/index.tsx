import { AppBar, Toolbar, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import { useAuth } from '@/entities/user';
import { LogoutButton } from '@/features/logout-button';
import { ChangeLanguage } from '@/features';
import styles from './styles.module.scss';

export const HeaderLayout = (): JSX.Element => {
  const isAuth = useAuth((state) => state.isAuth);
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
        {isAuth && <LogoutButton />}
        <ChangeLanguage />
      </Toolbar>
    </AppBar>
  );
};
