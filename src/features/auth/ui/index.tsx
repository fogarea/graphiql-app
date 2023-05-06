import { Button, Box, Typography, TextField, CssBaseline } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import { loginSchema, type TypeLoginSchema } from '../lib';

export const AuthForm = ({ authUser, label }: IAuthFormProps): JSX.Element => {
  const { t } = useTranslation();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TypeLoginSchema>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<TypeLoginSchema> = ({ email, password }) => {
    authUser(email, password);
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {label}
        </Typography>
        <form noValidate onSubmit={(e) => void handleSubmit(onSubmit)(e)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label={t('login.email')}
                variant="outlined"
                placeholder="example@dev.com"
                error={!!errors.email}
                helperText={errors.email ? errors.email?.message : ''}
                fullWidth
                margin="dense"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label={t('login.password')}
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password ? errors.password?.message : ''}
                fullWidth
                margin="dense"
              />
            )}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            {label}
          </Button>
        </form>
      </Box>
    </>
  );
};

interface IAuthFormProps {
  authUser: (email: string, password: string) => void;
  label: string;
}
