import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import { TypeDeveloper } from '../../model/types';
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
      gap={2}
      bgcolor="#fff"
      xs
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 2,
        pb: 2,
        borderRadius: 3,
        minWidth: 280,
        boxShadow: '0 4px 20px rgba(0,0,0,.05)',
      }}
    >
      <DeveloperAvatar src={avatarSrc} alt={githubName} />
      <Typography variant="h3" component="h3" textAlign="center" sx={{ mt: 3 }}>
        {t(`welcome.${name}`)}
      </Typography>
      <Typography variant="subtitle2" component="p">
        {t(`welcome.${role}`)}
      </Typography>
      <Link color="inherit" href={githubLink} sx={{ mt: 1 }}>
        <GitHubIcon />
      </Link>
    </Grid>
  );
};
