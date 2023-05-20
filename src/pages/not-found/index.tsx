import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import styled from '@mui/material/styles/styled';

import { TypeAppRoute } from '@/shared/config';
import { LargeButton, Section } from '@/shared/ui';
import { useTitle } from '@/shared/lib';

const StyledWrapper = styled(Box)(({ theme }) => ({
  maxWidth: 780,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(2),
  padding: '46px 0',
}));

export const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation();

  useTitle(t('page-title.not-found'));

  return (
    <Section>
      <StyledWrapper>
        <Typography variant="h2" component="h1">
          {t('not-found.title')}
        </Typography>

        <Typography sx={{ color: (theme) => theme.palette.text.secondary }}>
          {t('not-found.subtitle')}
        </Typography>

        <LargeButton
          variant="contained"
          sx={{
            mt: { xs: 3, sm: 5 },
          }}
          component={NavLink}
          to={TypeAppRoute.Welcome}
        >
          {t('not-found.welcome-page-button')}
        </LargeButton>
      </StyledWrapper>
    </Section>
  );
};
