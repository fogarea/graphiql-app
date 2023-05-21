import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import { useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { TypePossibleLanguages } from '@/shared/config';

export const LanguageForm = ({
  languages,
  selectedLanguage,
  onToggleLanguage,
}: IChangeLanguageProps): JSX.Element => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isOpen = Boolean(anchorEl);

  const selectedLanguageData = languages.find((lang) => lang.value === selectedLanguage);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleLanguage = (lang: string) => {
    setAnchorEl(null);
    onToggleLanguage(lang);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 28,
          height: 20,
          margin: { xs: '0', sm: '0 10px' },
        }}
      >
        <img src={selectedLanguageData?.icon} alt={selectedLanguageData?.label} />
      </IconButton>

      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
          {languages.map((language) => (
            <MenuItem
              key={language.value}
              selected={language.value === selectedLanguage}
              onClick={() => handleToggleLanguage(language.value)}
            >
              <Box
                component="img"
                alt={language.label}
                src={language.icon}
                sx={{ width: 28, mr: 2 }}
              />
              {t(`language.${language.label}`)}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
};

interface IChangeLanguageProps {
  languages: TypeLanguagesData[];
  selectedLanguage: TypePossibleLanguages;
  onToggleLanguage: (lang: string) => void;
}

type TypeLanguagesData = {
  value: string;
  label: string;
  icon: string;
};
