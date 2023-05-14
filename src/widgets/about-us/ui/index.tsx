import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useTranslation } from 'react-i18next';

import { DeveloperCard, developerService } from '@/entities/developer';
import { a11yHeader2TextAlign } from '@/shared/theme';

const developers = developerService.getAll();

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="h2" sx={{ ...a11yHeader2TextAlign() }}>
        {t('welcome.our-team')}
      </Typography>

      <Grid container gap={2} justifyContent="center">
        {developers.map((developer) => (
          <DeveloperCard key={developer.githubName} {...developer} />
        ))}
      </Grid>

      <Grid container justifyContent="center" mt={10} mb={10}>
        <Typography variant="subtitle2">
          {t('welcome.course-info1')}
          <Link href="https://rs.school/react/">React Course</Link>
          {t('welcome.course-info2')}
          <Link href="https://rs.school/index.html">RS School</Link>
        </Typography>
      </Grid>
    </Container>
  );
};
