import styled from '@mui/material/styles/styled';
import { Box } from '@mui/material';

export const WelcomeHeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '98vh',
  backgroundColor: theme.palette.common.white,
}));
