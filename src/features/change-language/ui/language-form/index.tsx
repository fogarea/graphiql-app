import { LanguageNames, Languages } from '@/shared/config';
import { Menu, Fade, MenuItem, Divider, Button } from '@mui/material';
import { useState, MouseEvent } from 'react';
import TranslateIcon from '@mui/icons-material/Translate';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const LanguageForm = ({ onToggleLanguage }: IChangeLanguageProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isOpen = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang: string) => {
    setAnchorEl(null);
    onToggleLanguage(lang);
  };

  return (
    <>
      <Button
        id="demo-customized-button"
        aria-controls={isOpen ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        startIcon={<TranslateIcon />}
      >
        Languages
      </Button>
      <Menu
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        onClose={handleClose}
        TransitionComponent={Fade}
        open={isOpen}
        PaperProps={{
          style: {
            width: '160px',
          },
        }}
      >
        <MenuItem onClick={() => handleClose(Languages.English)}>
          {LanguageNames[Languages.English]}
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={() => handleClose(Languages.Russian)}>
          {LanguageNames[Languages.Russian]}
        </MenuItem>
      </Menu>
    </>
  );
};

interface IChangeLanguageProps {
  onToggleLanguage: (lng: string) => void;
}
