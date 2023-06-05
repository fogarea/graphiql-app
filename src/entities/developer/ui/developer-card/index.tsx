import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import { TypeDeveloper } from '../../model';
import { DeveloperAvatar } from '../developer-avatar';

export const DeveloperCard = ({
  name,
  avatarSrc,
  githubName,
  githubLink,
}: TypeDeveloper): JSX.Element => {
  const { t } = useTranslation();
  return (
    <StyledGrid item gap={2} xs>
      <DeveloperAvatar src={avatarSrc} alt={githubName} />
      <Typography variant="h3" component="h3" textAlign="center" sx={{ mt: 3 }}>
        {t(`welcome.${name}`)}
      </Typography>
      <Link color="inherit" href={githubLink} sx={{ mt: 1 }}>
        <GitHubIcon />
      </Link>
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  borderRadius: theme.spacing(2),
  minWidth: 280,
  boxShadow: '0 4px 20px rgba(0,0,0,.05)',
  backgroundColor: theme.palette.background.paper,
}));
