import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

import { WelcomeHeroContainer } from '../welcome-hero-container';
import { EditorPageButton } from '@/features/editor';
import { Section } from '@/shared/ui';

export const WelcomeHeroLayout = ({ onScrollClick }: IWelcomeHeroLayoutProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Section disableGutters={true} maxWidth={false}>
      <WelcomeHeroContainer>
        <img src={'./assets/svg/logo/logo.svg'} alt="Logo" width="247" height="120" />
        <Typography variant="h1" component="h1">
          GraphiQL
        </Typography>
        <Typography
          align="center"
          variant="subtitle1"
          component="p"
          sx={{ mb: 4, mt: { xs: 2, sm: 4 }, maxWidth: 800 }}
        >
          {t('welcome.description')}
        </Typography>
        <EditorPageButton />
        <IconButton sx={{ mt: { xs: 2, sm: 4 } }} onClick={() => onScrollClick()}>
          <ExpandMoreIcon color="inherit" />
        </IconButton>
      </WelcomeHeroContainer>
    </Section>
  );
};

interface IWelcomeHeroLayoutProps {
  onScrollClick: () => void;
}
