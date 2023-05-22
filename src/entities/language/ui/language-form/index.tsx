import { Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { TypePossibleLanguages } from '@/shared/config';
import { PopoverContent, PopoverIcon } from '@/shared/ui';

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
      <PopoverIcon onOpen={handleOpen}>
        <img src={selectedLanguageData?.icon} alt={selectedLanguageData?.label} />
      </PopoverIcon>

      <PopoverContent isOpen={isOpen} anchorEl={anchorEl} onClose={handleClose}>
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
      </PopoverContent>
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
