import languagesData, { LanguageForm, useLanguage } from '@/entities/language';

export const ChangeLanguage = (): JSX.Element => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <LanguageForm
      selectedLanguage={lang}
      onToggleLanguage={toggleLanguage}
      languages={languagesData.languages}
    />
  );
};
