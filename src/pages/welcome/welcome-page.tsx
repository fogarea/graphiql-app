import { Container, Grid, Link, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import styles from './styles.module.scss';
import { ListAuthorsCards } from '@/entities/developer/ui';

export const WelcomePage = (): JSX.Element => {
  return (
    <Container className={styles.welcomeContainer}>
      <Grid container spacing={2} flexDirection="row" justifyContent="flex-end">
        <Grid item>
          <Button variant="contained">Sign In</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">Sign Up</Button>
        </Grid>
      </Grid>
      <Grid container alignItems="flex-start">
        <Typography variant="h2" className={styles.header2} bgcolor="#fff" padding={2}>
          GraphiQL is a playground/IDE for graphQL requests.
        </Typography>
      </Grid>

      <ListAuthorsCards />

      <Grid container gap={1} justifyContent="center">
        <Typography paragraph>The application is made in</Typography>
        <Link href="https://rs.school/react/">React Course</Link>
        <Typography paragraph>of the</Typography>
        <Link href="https://rs.school/index.html">RS School</Link>
      </Grid>
    </Container>
  );
};
