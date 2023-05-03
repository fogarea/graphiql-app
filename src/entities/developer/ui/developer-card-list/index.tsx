import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { DeveloperCard, TypeJsonDevelopers } from '@/entities/developer/';

export const DeveloperCardList = ({ developers }: TypeJsonDevelopers): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Grid container flexDirection="column" mt={2}>
      <Typography variant="h3" mb={4}>
        {t('welcome.our-team')}
      </Typography>
      <Grid container gap={2}>
        {developers.map((el) => (
          <DeveloperCard key={el.githubName} {...el} />
        ))}
      </Grid>
    </Grid>
  );
};
