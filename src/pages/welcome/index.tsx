import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import { WelcomeHeroLayout } from '@/widgets/welcome-hero';
import { DeveloperCardList, developerService } from '@/entities/developer';

export const WelcomePage = (): JSX.Element => {
  const { t } = useTranslation();
  const developers = developerService.getAll();

  return (
    <>
      <WelcomeHeroLayout />
      <Container>
        <DeveloperCardList developers={developers} />
        <Grid container gap={1} justifyContent="center" mt={2}>
          <Typography paragraph>{t('welcome.course-info1')}</Typography>
          <Link href="https://rs.school/react/">React Course</Link>
          <Typography paragraph>{t('welcome.course-info2')}</Typography>
          <Link href="https://rs.school/index.html">RS School</Link>
        </Grid>
      </Container>
    </>
  );
};
