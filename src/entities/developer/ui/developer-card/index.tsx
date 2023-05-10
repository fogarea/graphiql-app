import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from 'react-i18next';

import { TypeDeveloper } from '../../types';
import { DeveloperAvatar } from '../developer-avatar';

export const DeveloperCard = ({
  name,
  role,
  avatarSrc,
  githubName,
  githubLink,
}: TypeDeveloper): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Grid
      item
      gap={1}
      bgcolor="#fff"
      xs
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 2,
        pb: 2,
      }}
    >
      <DeveloperAvatar src={avatarSrc} alt={githubName} />
      <Typography variant="h4" textAlign="center">
        {t(`welcome.${name}`)}
      </Typography>
      <Typography paragraph>{t(`welcome.${role}`)}</Typography>
      <Link color="inherit" href={githubLink}>
        <GitHubIcon />
      </Link>
    </Grid>
  );
};
