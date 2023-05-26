import { useAuth } from '@/entities/user';
import { withAuthorize } from '@/shared/lib/hocs';
import { AuthorizedToolbar } from './authorized-toolbar';
import { UnauthorizedToolbar } from './unauthorized-toolbar';

export const AuthToolbar = () => {
  const { isAuth } = useAuth();

  return withAuthorize(isAuth, AuthorizedToolbar, UnauthorizedToolbar);
};
