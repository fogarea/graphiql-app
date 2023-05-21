import i18next from 'i18next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LS_LANGUAGE_KEY, PossibleLanguagesValues, TypePossibleLanguages } from '@/shared/config';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const [lang, setLang] = useState<TypePossibleLanguages>(
    i18next.language as TypePossibleLanguages
  );

  const toggleLanguage = (lang: string) => {
    void i18n.changeLanguage(lang, (err: string) => {
      if (!err && isPossibleLanguage(lang)) {
        setLang(lang);
        localStorage.setItem(LS_LANGUAGE_KEY, lang);
      }
    });
  };

  return {
    lang,
    toggleLanguage,
  };
};

const isPossibleLanguage = (maybeLanguage: string): maybeLanguage is TypePossibleLanguages => {
  const language = PossibleLanguagesValues.find(
    (possibleLanguage) => possibleLanguage === maybeLanguage
  );

  return !!language;
};
