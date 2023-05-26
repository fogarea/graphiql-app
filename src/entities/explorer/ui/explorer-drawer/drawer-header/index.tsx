import styled from '@mui/material/styles/styled';

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  padding: theme.spacing(0, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));
