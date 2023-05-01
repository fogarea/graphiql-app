import { Box, Typography, Container } from '@mui/material';

export const FooterLayout = (): JSX.Element => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body1">Copyright</Typography>
      </Container>
    </Box>
  );
};
