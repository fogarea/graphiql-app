import { VariantType, enqueueSnackbar } from 'notistack';

const generateToast = (variant: VariantType) => (message: string) => {
  enqueueSnackbar(message, { variant });
};

export const toast = {
  error: generateToast('error'),
  success: generateToast('success'),
  warn: generateToast('warning'),
  info: generateToast('info'),
};
