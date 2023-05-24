import { Box } from '@mui/material';
import styled from '@mui/material/styles/styled';

export const WelcomeHeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '98vh',
  backgroundColor: theme.palette.common.white,
  textAlign: 'center',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
