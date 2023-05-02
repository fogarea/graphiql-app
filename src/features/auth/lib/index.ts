import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have correct format')
    .required('Email is a required field'),
  password: yup
    .string()
    .matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,})/, 'Password should pass requirements')
    .required('Password is a required field'),
});

export type TypeLoginSchema = yup.InferType<typeof loginSchema>;
