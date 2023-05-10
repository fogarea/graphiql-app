import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import { DeveloperCardList, developerService } from '@/entities/developer';
import { EditorPageButton } from '@/features/editor';
import styles from './styles.module.scss';

export const WelcomePage = (): JSX.Element => {
  const { t } = useTranslation();
  const developers = developerService.getAll();

  return (
    <Container className={styles.welcomeContainer}>
      <Grid container justifyContent="center" mt={2}>
        <EditorPageButton />
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
