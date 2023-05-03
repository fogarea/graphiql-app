import { Avatar, Grid, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IDeveloperData } from '@/entities/developer/types';
import { useTranslation } from 'react-i18next';

export const DeveloperCard = (props: IDeveloperData): JSX.Element => {
  const { name, role, avatarSrc, githubName, githubLink } = props;
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
      <Avatar
        src={avatarSrc}
        alt={githubName}
        sx={{
          width: 128,
          height: 128,
        }}
      />
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
