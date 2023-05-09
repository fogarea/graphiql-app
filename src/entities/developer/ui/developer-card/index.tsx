import { Grid, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from 'react-i18next';

import { IDeveloperData } from '../../types';
import { DeveloperAvatar } from '../developer-avatar';

export const DeveloperCard = ({
  name,
  role,
  avatarSrc,
  githubName,
  githubLink,
}: IDeveloperData): JSX.Element => {
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
