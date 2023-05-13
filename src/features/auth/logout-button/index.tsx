import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAuth } from '@/entities/user';
import { DefaultButton } from '@/shared/ui';
import { TypeAppRoute } from '@/shared/config';

export const LogoutButton = (): JSX.Element => {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <DefaultButton
      variant="contained"
      onClick={() => void logout(() => navigate(TypeAppRoute.Logout))}
    >
      {t('editor.log-out')}
    </DefaultButton>
  );
};
