import { LanguageForm } from './ui';
import { useTranslation } from 'react-i18next';

export const ChangeLanguage = (): JSX.Element => {
  const { i18n } = useTranslation();

  const onToggleLanguage = (lang: string) => {
    i18n
      .changeLanguage(lang)
      .then(() => {
        localStorage.setItem('language', lang);
      })
      .catch(() => {
        // Some error here
      });
  };

  return <LanguageForm onToggleLanguage={onToggleLanguage} />;
};
