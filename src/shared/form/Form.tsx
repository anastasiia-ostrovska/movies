import { type ReactNode } from 'react';
import Stack, { type StackProps } from '@mui/material/Stack';
import { type FieldValues, type SubmitHandler, useFormContext } from 'react-hook-form';

type FormProps<T extends FieldValues> = {
  onSubmit: SubmitHandler<T>;
  children?: ReactNode;
} & Omit<StackProps<'form'>, 'onSubmit'>;

const Form = <T extends FieldValues>({
  onSubmit,
  children = null,
  ...stackProps
}: FormProps<T>) => {
  const { handleSubmit } = useFormContext<T>();

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} noValidate {...stackProps}>
      {children}
    </Stack>
  );
};

export default Form;
