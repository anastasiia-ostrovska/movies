import type { HTMLInputTypeAttribute, ReactNode } from 'react';
import { Controller, type UseControllerProps, useFormContext } from 'react-hook-form';
import { MenuItem, TextField, type TextFieldProps } from '@mui/material';

export interface Item {
  value: string;
  label: string;
}

interface InputProps {
  name: string;
  type: HTMLInputTypeAttribute;
  label?: string;
  helperText?: string;
  rules?: UseControllerProps['rules'];
  endAdornment?: ReactNode;
  menuItems?: Item[];
}

type InputExtendedProps = InputProps & TextFieldProps;

const Input = ({
  name,
  type,
  label = '',
  rules = {},
  helperText = '',
  endAdornment = null,
  menuItems = [],
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
            slotProps={{ input: { endAdornment } }}
            {...field}
            {...textFieldMuiProps}
          >
            {menuItems.map(item => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
        );
      }}
    />
  );
};

export default Input;
