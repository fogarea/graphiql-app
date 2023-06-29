import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ExternalLinkIcon, ScrollToTopButton } from '@/shared/ui';

export const FooterLayout = memo((): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Container
        component="footer"
        maxWidth="xl"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
          <Grid item xs>
            <Box justifyContent="flex-start">
              <Box display={{ xs: 'none', sm: 'inline-block' }}>{t('footer.created-at')}&nbsp;</Box>
              2023
            </Box>
          </Grid>
          <Grid item xs>
            <StyledLink
              color="inherit"
              target="_blank"
              href="https://github.com/fogarea/graphiql-app"
            >
              <Typography variant="body1">Github</Typography>
              <ExternalLinkIcon />
            </StyledLink>
          </Grid>
        </Grid>
      </Container>
      <ScrollToTopButton title={t('button.scroll-to-top')} />
    </>
  );
});

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: theme.spacing(1),
  textDecoration: 'none',
}));
