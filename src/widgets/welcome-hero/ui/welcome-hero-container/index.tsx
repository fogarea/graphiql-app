import styled from '@mui/material/styles/styled';
import Container from '@mui/material/Container';

export const WelcomeHeroContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '98vh',
  backgroundColor: theme.palette.common.white,
  textAlign: 'center',
  gap: theme.spacing(4),
}));
