import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { WelcomeHeroContainer } from '../welcome-hero-container';
import { WelcomeHeroBox } from '../welcome-hero-box';
import { EditorPageButton } from '@/features/editor';

export const WelcomeHeroLayout = (): JSX.Element => {
  return (
    <WelcomeHeroContainer>
      <WelcomeHeroBox>
        <img src={'./assets/svg/logo/logo.svg'} alt="Logo" width="247" height="120" />
        <Typography variant="h1">GraphiQL</Typography>
        <Typography align="center" variant="h2" sx={{ mb: 4, mt: { xs: 2, sm: 4 }, maxWidth: 800 }}>
          GraphiQL is a web-based interface that simplifies the process of querying and testing
          GraphQL APIs for developers
        </Typography>
        <EditorPageButton />
      </WelcomeHeroBox>
      <IconButton sx={{ position: 'absolute', bottom: 32 }}>
        <ExpandMoreIcon color="inherit" />
      </IconButton>
    </WelcomeHeroContainer>
  );
};
