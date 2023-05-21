import { BurgerMenu } from '@/widgets/burger-menu';
import { FooterLayout } from '@/widgets/footer-layout';
import { HeaderLayout } from '@/widgets/header-layout';
import { Layout, Loader } from '@/shared/ui';

export const AppLayout = (): JSX.Element => (
  <Layout
    headerSlot={<HeaderLayout burgerMenuSlot={<BurgerMenu />} />}
    loader={<Loader />}
    footerSlot={<FooterLayout />}
  />
);
