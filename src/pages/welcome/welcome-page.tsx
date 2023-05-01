import { Avatar, Container, Grid, Link, List, ListItem, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import fogareaAvatar from '@/assets/images/fogarea.png';
import shopotAvatar from '@/assets/images/shopot.png';
import kostiliAvatar from '@/assets/images/kostili.jpg';
import styles from './styles.module.scss';

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
        <Typography variant="h2" className={styles.header2}>
          GraphiQL is a playground/IDE for graphQL requests.
        </Typography>
      </Grid>

      <Grid container flexDirection="column" alignItems="flex-start" sx={{ mt: 4 }}>
        <Grid item>
          <Typography variant="h3">Our Team:</Typography>
        </Grid>
        <List sx={{ mt: 2 }}>
          <ListItem
            sx={{
              gap: 1,
            }}
          >
            <Avatar src={fogareaAvatar} alt="fogarea avatar" sx={{ width: 64, height: 64 }} />
            <Typography variant="h4">Konstantin Smirnov:</Typography>
            <Typography paragraph className={styles.paragraphDeveloper}>
              Team Lead / Developer
            </Typography>
            <Link color="inherit" href="https://github.com/fogarea">
              <GitHubIcon />
            </Link>
          </ListItem>
          <ListItem
            sx={{
              gap: 1,
            }}
          >
            <Avatar src={shopotAvatar} alt="shopot avatar" sx={{ width: 64, height: 64 }} />
            <Typography variant="h4">Konstantin Sapronov: </Typography>
            <Typography paragraph className={styles.paragraphDeveloper}>
              Developer
            </Typography>
            <Link color="inherit" href="https://github.com/shopot">
              <GitHubIcon />
            </Link>
          </ListItem>
          <ListItem
            sx={{
              gap: 1,
            }}
          >
            <Avatar src={kostiliAvatar} alt="kostili avatar" sx={{ width: 64, height: 64 }} />
            <Typography variant="h4">Danil Podgorniy: </Typography>
            <Typography paragraph className={styles.paragraphDeveloper}>
              Developer
            </Typography>
            <Link color="inherit" href="https://github.com/kostili-tec">
              <GitHubIcon />
            </Link>
          </ListItem>
        </List>
      </Grid>

      <Grid container gap={1} justifyContent="center">
        <Typography paragraph>The application is made in</Typography>
        <Link href="https://rs.school/react/">React Course</Link>
        <Typography paragraph>of the</Typography>
        <Link href="https://rs.school/index.html">RS School</Link>
      </Grid>
    </Container>
  );
};
