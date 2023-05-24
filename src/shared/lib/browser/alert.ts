import { VariantType, enqueueSnackbar } from 'notistack';

const generateAlert = (variant: VariantType) => (message: string) => {
  enqueueSnackbar(message, { variant });
};

export const alert = {
  error: generateAlert('error'),
  success: generateAlert('success'),
  warn: generateAlert('warning'),
  info: generateAlert('info'),
};
