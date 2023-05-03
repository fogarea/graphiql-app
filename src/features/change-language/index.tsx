import { LS_LANGUAGE_KEY } from '@/shared/config';
import { LanguageForm } from './ui';
import { useTranslation } from 'react-i18next';

export const ChangeLanguage = (): JSX.Element => {
  const { i18n } = useTranslation();

  const onToggleLanguage = (lang: string) => {
    void i18n.changeLanguage(lang, (err: string) => {
      if (!err) {
        localStorage.setItem(LS_LANGUAGE_KEY, lang);
      }
    });
  };

  return <LanguageForm onToggleLanguage={onToggleLanguage} />;
};
