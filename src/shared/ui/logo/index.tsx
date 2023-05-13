import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';
import { Link } from 'react-router-dom';

import { TypeAppRoute } from '../../config';

const StyledLogo = styled('div')(({ theme }) => ({
  flexGrow: 1,
  a: {
    textDecoration: 'none',
    color: theme.palette.grey['800'],
    display: 'flex',
  },
}));

export const Logo = ({ withTitle }: ILogoProps): JSX.Element => {
  return (
    <StyledLogo>
      <Link to={TypeAppRoute.Welcome}>
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
  withTitle: boolean;
}
