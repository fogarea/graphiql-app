import { Container, Grid, Link, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { DeveloperCardList } from '@/entities/developer/ui';
import developers from '@/entities/developer/model';
import { TypeJsonDevelopers } from '@/entities/developer/types';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

export const WelcomePage = (): JSX.Element => {
  const { t } = useTranslation();

  const authorsJsonData: TypeJsonDevelopers = developers as unknown as TypeJsonDevelopers;
  return (
    <Container className={styles.welcomeContainer}>
      <Grid container spacing={2} flexDirection="row" justifyContent="flex-end">
        <Grid item>
          <Button variant="contained">{t('welcome.sign-in')}</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">{t('welcome.sign-up')}</Button>
        </Grid>
      </Grid>
      <Grid container alignItems="flex-start" mt={2}>
        <Typography variant="h2" bgcolor="#fff" padding={2}>
          {t('welcome.description')}
        </Typography>
      </Grid>

      <DeveloperCardList {...authorsJsonData} />

      <Grid container gap={1} justifyContent="center" mt={2}>
        <Typography paragraph>{t('welcome.course-info1')}</Typography>
        <Link href="https://rs.school/react/">React Course</Link>
        <Typography paragraph>{t('welcome.course-info2')}</Typography>
        <Link href="https://rs.school/index.html">RS School</Link>
      </Grid>
    </Container>
  );
};
