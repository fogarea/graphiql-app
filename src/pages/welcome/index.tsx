import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import { WelcomeHeroLayout } from '@/widgets/welcome-hero';
import { Developers } from '@/widgets/developers';

export const WelcomePage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <WelcomeHeroLayout />
      <Developers />
      <Container>
        <Grid container gap={1} justifyContent="center" mt={10} mb={10}>
          <Typography variant="subtitle2">
            {t('welcome.course-info1')}
            <Link href="https://rs.school/react/">React Course</Link>
            {t('welcome.course-info2')}
            <Link href="https://rs.school/index.html">RS School</Link>
          </Typography>
        </Grid>
      </Container>
    </>
  );
};
