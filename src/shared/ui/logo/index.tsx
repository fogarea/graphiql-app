import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import styled from '@mui/material/styles/styled';
import { Link } from 'react-router-dom';

import { TypeAppRoute } from '../../config';

const StyledLogo = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  a: {
    textDecoration: 'none',
    color: theme.palette.grey['800'],
    display: 'flex',
  },
}));

export const Logo = ({ withTitle, isMobile }: ILogoProps): JSX.Element => {
  return (
    <StyledLogo
      sx={{
        display: !isMobile ? { xs: 'none', sm: 'block' } : { xs: 'block', sm: 'none' },
      }}
    >
      <Link to={TypeAppRoute.Welcome} style={{ display: 'inline-flex', alignItems: 'center' }}>
        <img src={'./assets/svg/logo/logo.svg'} alt="Logo" style={{ marginRight: '5px' }} />
        {withTitle && (
          <Typography variant="h6" component="div">
            <span style={{ fontWeight: 500, fontSize: 20 }}>GraphiQL</span>
          </Typography>
        )}
      </Link>
    </StyledLogo>
  );
};

interface ILogoProps {
  withTitle?: boolean;
  isMobile?: boolean;
}
