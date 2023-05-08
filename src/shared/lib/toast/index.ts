import { enqueueSnackbar } from 'notistack';

const generateToast = (variant: TypeToastVariant) => (message: string) => {
  enqueueSnackbar(message, { variant });
};

export const error = generateToast('error');
export const success = generateToast('success');
export const warn = generateToast('warning');
export const info = generateToast('info');

type TypeToastVariant = 'error' | 'success' | 'warning' | 'info';
