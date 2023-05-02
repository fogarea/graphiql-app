import { Grid, Typography } from '@mui/material';
import { AuthorCard } from '../card';
import { TypeJsonDevelopers } from '@/entities/developer/types';
import developers from '@/entities/developer/model';

export const ListAuthorsCards = (): JSX.Element => {
  const authorsJsonData: TypeJsonDevelopers = developers as unknown as TypeJsonDevelopers;
  return (
    <Grid container flexDirection="column">
      <Typography variant="h3" sx={{ mb: 4 }}>
        Our Team:
      </Typography>
      <Grid container gap={2}>
        {authorsJsonData.developers.map((el) => (
          <AuthorCard key={el.githubName} {...el} />
        ))}
      </Grid>
    </Grid>
  );
};
