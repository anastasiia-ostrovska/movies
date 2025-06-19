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
  endAdornment?: ReactNode;
  rules?: UseControllerProps['rules'] | undefined;
  menuItems?: Item[] | undefined;
}

type InputExtendedProps = InputProps & TextFieldProps;

const Input = ({
  name,
  type,
  rules,
  menuItems,
  label = '',
  helperText = '',
  endAdornment = null,
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
            {menuItems
              ? menuItems.map(item => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))
              : null}
          </TextField>
        );
      }}
    />
  );
};

export default Input;
