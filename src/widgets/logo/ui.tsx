import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';
import { Link } from 'react-router-dom';
import { TypeAppRoute } from '@/shared/config';

const StyledLogo = styled('div')(() => ({
  flexGrow: 1,
}));

export const Logo = (): JSX.Element => {
  return (
    <StyledLogo>
      <Link
        to={TypeAppRoute.Welcome}
        style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
      >
        <img src={'./assets/svg/logo/logo.svg'} alt="Logo" style={{ marginRight: '5px' }} />
        <Typography variant="h6" component="div">
          <span style={{ fontWeight: 500, fontSize: 20 }}>GraphiQL</span>
        </Typography>
      </Link>
    </StyledLogo>
  );
};
