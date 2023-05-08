import { Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledRedirect = styled('div')(({ theme }) => ({
  color: theme.palette.info.dark,
  textDecoration: 'underline',
}));

export const AuthRedirectButton = ({
  label,
  route,
  routeLabel,
}: IAuthRedirectButtonProps): JSX.Element => {
  return (
    <Grid container justifyContent="center" spacing={1}>
      <Grid item>
        <Typography>{label}</Typography>
      </Grid>
      <Grid item>
        <Typography>
          <NavLink to={route}>
            <StyledRedirect>{routeLabel}</StyledRedirect>
          </NavLink>
        </Typography>
      </Grid>
    </Grid>
  );
};

interface IAuthRedirectButtonProps {
  label: string;
  route: string;
  routeLabel: string;
}
