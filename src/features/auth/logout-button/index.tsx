import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';
import { DefaultButton } from '@/shared/ui';

export const LogoutButton = (): JSX.Element => {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <DefaultButton
      variant="contained"
      onClick={() => void logout(() => navigate(TypeAppRoute.Logout))}
      sx={{ width: '100%' }}
    >
      {t('editor.log-out')}
    </DefaultButton>
  );
};
