import { Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

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
