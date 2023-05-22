import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export const UserCard = ({ email }: IUserCardProps) => {
  return (
    <Box sx={{ my: 1, px: 2, textAlign: 'center' }}>
      <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
        {email}
      </Typography>
    </Box>
  );
};

interface IUserCardProps {
  email: string;
}
