import styled from '@mui/material/styles/styled';
import { Box } from '@mui/material';

export const WelcomeHeroBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(4),
  padding: theme.spacing(2),
}));
