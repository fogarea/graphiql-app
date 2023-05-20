import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import { memo } from 'react';

import { developerService } from '@/entities/developer';

const developers = developerService.getAll();

export const FooterLayout = memo((): JSX.Element => {
  const developerList = developers.map(({ id, githubLink }) => {
    return (
      <Link
        key={id}
        color="inherit"
        target="_blank"
        href={githubLink}
        display="flex"
        alignItems="center"
        gap={0.3}
      >
        <img
          src={'./assets/svg/github/github.svg'}
          alt="Github Logo"
          style={{ height: '24px', width: '24px', display: 'inline-block' }}
        />
      </Link>
    );
  });

  return (
    <Container
      component="footer"
      maxWidth="xl"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
      }}
    >
      <Grid container justifyContent="space-around" alignItems="center" spacing={2}>
        <Grid item xs>
          <Box sx={{ display: 'flex', gap: 1 }}>{developerList}</Box>
        </Grid>
        <Grid item xs>
          <Typography variant="body1" textAlign="center">
            © 2023
          </Typography>
        </Grid>
        <Grid item xs>
          <Link
            href="https://rs.school/react/"
            target="_blank"
            display="flex"
            flexDirection="row-reverse"
          >
            <img
              src={'./assets/svg/rs/logo_rs.svg'}
              alt="RS School React Course"
              style={{
                height: '24px',
                width: '64px',
                display: 'inline-block',
              }}
            />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
});
