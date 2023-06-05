import { Box } from '@mui/material';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';

export const UserCard = ({ email }: IUserCardProps) => {
  return (
    <Wrapper>
      <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
        {email}
      </Typography>
    </Wrapper>
  );
};

interface IUserCardProps {
  email: string;
}

const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  textAlign: 'center',
}));
