import { SnackbarProvider } from 'notistack';
import { ReactNode } from 'react';

export const withToast = (component: () => ReactNode) => () =>
  (
    <SnackbarProvider
      preventDuplicate
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      autoHideDuration={3000}
      transitionDuration={{ enter: 425, exit: 395 }}
    >
      {component()}
    </SnackbarProvider>
  );
