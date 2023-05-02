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
          onToggleLanguage('en');
        }}
      >
        English
      </ColorButton>{' '}
      <ColorButton
        variant="outlined"
        onClick={() => {
          onToggleLanguage('ru');
        }}
      >
        Russian
      </ColorButton>
    </>
  );
};

interface IChangeLanguageProps {
  onToggleLanguage: (lng: string) => void;
}
