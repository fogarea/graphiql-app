import { LanguageNames, Languages } from '@/shared/config';
import { Button, ButtonProps, styled } from '@mui/material';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export const LanguageForm = ({ onToggleLanguage }: IChangeLanguageProps): JSX.Element => {
  return (
    <>
      <ColorButton
        onClick={() => {
          onToggleLanguage(Languages.English);
        }}
      >
        {LanguageNames[Languages.English]}
      </ColorButton>{' '}
      <ColorButton
        variant="outlined"
        onClick={() => {
          onToggleLanguage(Languages.Russian);
        }}
      >
        {LanguageNames[Languages.Russian]}
      </ColorButton>
    </>
  );
};

interface IChangeLanguageProps {
  onToggleLanguage: (lng: string) => void;
}
