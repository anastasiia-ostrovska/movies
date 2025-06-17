import { Form, Input } from '@/shared/form';
import { FormProvider } from 'react-hook-form';
import Button from '@mui/material/Button';
import { type LoginData } from '@/entities/session';
import { LOGIN_FORM_TEXT } from '../config/login-form-text.ts';
import { useShowPassword } from '../model/use-show-password.ts';
import ShowPasswordButton from './ShowPasswordButton.tsx';
import LoginFormLayout from './LoginFormLayout.tsx';
import { useLoginForm } from '@/features/login-form/model/use-login-form.ts';

const LoginForm = () => {
  const { methods, isFormDisabled, isSubmitButtonDisabled, formErrorMessage, onSubmit } =
    useLoginForm();
  const { type, isVisible, toggleVisibility } = useShowPassword();
  const { email, password, submitButton } = LOGIN_FORM_TEXT;

  return (
    <FormProvider {...methods}>
      <Form<LoginData> onSubmit={onSubmit}>
        <LoginFormLayout
          formErrorMessage={formErrorMessage}
          emailInput={
            <Input
              required
              disabled={isFormDisabled}
              type={'email'}
              name={email.name}
              label={email.label}
              autoComplete={email.autoComplete}
              helperText={email.helperText}
              rules={{ required: email.errorText.required }}
            />
          }
          passwordInput={
            <Input
              required
              disabled={isFormDisabled}
              type={type}
              name={password.name}
              label={password.label}
              autoComplete={password.autoComplete}
              helperText={password.helperText}
              endAdornment={
                <ShowPasswordButton
                  isPasswordVisible={isVisible}
                  toggleVisibility={toggleVisibility}
                />
              }
              rules={{ required: password.errorText.required }}
            />
          }
          submitButton={
            <Button type="submit" variant="contained" disabled={isSubmitButtonDisabled}>
              {submitButton.label}
            </Button>
          }
        />
      </Form>
    </FormProvider>
  );
};

export default LoginForm;
