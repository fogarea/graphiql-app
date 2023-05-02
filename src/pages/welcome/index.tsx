import { useTranslation } from 'react-i18next';

export const WelcomePage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('welcome.header')}</h1>
      <p>{t('demo')}</p>
    </>
  );
};
