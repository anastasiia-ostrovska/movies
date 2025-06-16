import type { HTMLInputTypeAttribute, ReactNode } from 'react';
import { Controller, type UseControllerProps, useFormContext } from 'react-hook-form';
import { TextField, type TextFieldProps } from '@mui/material';

interface InputProps {
  name: string;
  type: HTMLInputTypeAttribute;
  label?: string;
  helperText?: string;
  rules?: UseControllerProps['rules'];
  endAdornment?: ReactNode;
}

type InputExtendedProps = InputProps & TextFieldProps;

const Input = ({
  name,
  type,
  label,
  rules,
  helperText,
  endAdornment,
  ...textFieldMuiProps
}: InputExtendedProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        return (
          <TextField
            label={label}
            type={type}
            error={!!error}
            helperText={error?.message || helperText}
            slotProps={{ input: { endAdornment: endAdornment } }}
            {...field}
            {...textFieldMuiProps}
          />
        );
      }}
    />
  );
};

export default Input;
