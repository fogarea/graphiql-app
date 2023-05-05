import { Container, Grid, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';
import data, { DeveloperCardList } from '@/entities/developer/';
import { useAuth } from '@/entities/user';
import { EditorPageButton } from '@/features/editor';
import { LoginButton, RegisterButton } from '@/features/auth';

export const WelcomePage = (): JSX.Element => {
  const { t } = useTranslation();

  const { developers } = data;

  const isAuth = useAuth((state) => state.isAuth);

  return (
    <Container className={styles.welcomeContainer}>
      <Grid container spacing={2} flexDirection="row" justifyContent="flex-end" mt={2}>
        {isAuth ? (
          <EditorPageButton />
        ) : (
          <>
            <LoginButton />
            <RegisterButton />
          </>
        )}
      </Grid>
      <Grid container alignItems="flex-start" mt={2}>
        <Typography variant="h2" bgcolor="#fff" padding={2}>
          {t('welcome.description')}
        </Typography>
      </Grid>

      <DeveloperCardList developers={developers} />

      <Grid container gap={1} justifyContent="center" mt={2}>
        <Typography paragraph>{t('welcome.course-info1')}</Typography>
        <Link href="https://rs.school/react/">React Course</Link>
        <Typography paragraph>{t('welcome.course-info2')}</Typography>
        <Link href="https://rs.school/index.html">RS School</Link>
      </Grid>
    </Container>
  );
};
