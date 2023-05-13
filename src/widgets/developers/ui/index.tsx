import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

import { DeveloperCard, developerService } from '@/entities/developer';
import { a11yHeader2TextAlign } from '@/shared/theme';

const developers = developerService.getAll();

export const Developers = () => {
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
    </Container>
  );
};
