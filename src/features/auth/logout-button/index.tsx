import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';
import { DefaultButton } from '@/shared/ui';

export const LogoutButton = ({ onLogout }: ILogoutButtonProps): JSX.Element => {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }

    void logout(() => navigate(TypeAppRoute.Logout));
  };

  return (
    <DefaultButton variant="contained" onClick={handleLogout} sx={{ width: '100%' }}>
      {t('editor.log-out')}
    </DefaultButton>
  );
};

interface ILogoutButtonProps {
  onLogout?: () => void;
}
