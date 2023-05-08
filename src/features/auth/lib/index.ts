import * as yup from 'yup';
import i18n from 'i18next';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email(i18n.t('validation.email-format'))
    .required(i18n.t('validation.email-required')),
  password: yup
    .string()
    .matches(
      /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,})/,
      i18n.t('validation.password-format')
    )
    .required(i18n.t('validation.password-required')),
});

export type TypeLoginSchema = yup.InferType<typeof loginSchema>;
