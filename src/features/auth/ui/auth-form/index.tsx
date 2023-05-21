import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import styled from '@mui/material/styles/styled';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { LoadingButton } from '@/shared/ui';
import { loginSchema, type TypeLoginSchema } from '../../lib';

const StyledForm = styled(Box)(() => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '46px 0 10px 0',
}));

export const AuthForm = ({ authUser, label, isLoading }: IAuthFormProps): JSX.Element => {
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
    <StyledForm>
      <Typography component="h2" variant="h2" sx={{ textAlign: 'center', mb: 2 }}>
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
        <LoadingButton
          type="submit"
          fullWidth
          loading={isLoading}
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          <span>{label}</span>
        </LoadingButton>
      </form>
    </StyledForm>
  );
};

interface IAuthFormProps {
  authUser: (email: string, password: string) => void;
  label: string;
  isLoading: boolean;
}
