import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

export const FormInput = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  label,
  error,
  helperText,
  placeholder,
  type,
}: TextFieldProps & UseControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          variant="outlined"
          placeholder={placeholder}
          error={error}
          helperText={helperText}
          fullWidth
          margin="dense"
        />
      )}
    />
  );
};
