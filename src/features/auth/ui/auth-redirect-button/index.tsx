import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';
import { NavLink } from 'react-router-dom';

const StyledRedirect = styled('div')(({ theme }) => ({
  color: theme.palette.info.dark,
  textDecoration: 'underline',
}));

export const AuthRedirectButton = ({
  label,
  redirectTo,
  redirectToLabel,
}: IAuthRedirectButtonProps): JSX.Element => {
  return (
    <Grid container justifyContent="center" spacing={1}>
      <Grid item>
        <Typography component="span">{label}</Typography>
      </Grid>
      <Grid item>
        <Typography component="span">
          <NavLink to={redirectTo}>
            <StyledRedirect>{redirectToLabel}</StyledRedirect>
          </NavLink>
        </Typography>
      </Grid>
    </Grid>
  );
};

interface IAuthRedirectButtonProps {
  label: string;
  redirectTo: string;
  redirectToLabel: string;
}
