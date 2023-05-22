import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Container from '@mui/material/Container/Container';
import Divider from '@mui/material/Divider/Divider';
import Drawer from '@mui/material/Drawer/Drawer';
import IconButton from '@mui/material/IconButton/IconButton';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { DrawerHeader } from './drawer-header';

export const ExplorerDrawer = ({
  open,
  children,
  toggleDrawer,
}: IExplorerDrawerProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Drawer
      PaperProps={{
        sx: { width: { xs: '100%', sm: '100%', md: '50%' } },
      }}
      anchor="right"
      open={open}
      onClose={toggleDrawer}
      hideBackdrop={false}
    >
      <DrawerHeader>
        <h2>{t('explorer.documentation')}</h2>
        <IconButton onClick={toggleDrawer}>
          <ChevronRightIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Container sx={{ paddingTop: 2, paddingBottom: 2 }}>{children}</Container>
    </Drawer>
  );
};

interface IExplorerDrawerProps {
  open: boolean;
  children?: ReactNode;
  toggleDrawer: () => void;
}
