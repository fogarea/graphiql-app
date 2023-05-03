import { Grid, Typography } from '@mui/material';
import { DeveloperCard } from '@/entities/developer/ui';
import { TypeJsonDevelopers } from '@/entities/developer/types';
import { useTranslation } from 'react-i18next';

export const ListDevelopersCards = (props: TypeJsonDevelopers): JSX.Element => {
  const { developers } = props;
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
