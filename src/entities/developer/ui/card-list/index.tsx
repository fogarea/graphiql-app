import { Grid, Typography } from '@mui/material';
import { DeveloperCard } from '@/entities/developer/ui';
import { TypeJsonDevelopers } from '@/entities/developer/types';

export const ListDevelopersCards = (props: TypeJsonDevelopers): JSX.Element => {
  const { developers } = props;
  return (
    <Grid container flexDirection="column">
      <Typography variant="h3" sx={{ mb: 4 }}>
        Our Team:
      </Typography>
      <Grid container gap={2}>
        {developers.map((el) => (
          <DeveloperCard key={el.githubName} {...el} />
        ))}
      </Grid>
    </Grid>
  );
};
