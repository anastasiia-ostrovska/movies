import { Form, Input } from '@/shared/form';
import { FormProvider } from 'react-hook-form';
import Button from '@mui/material/Button';
import { useShowPassword } from '@/shared/lib';
import { type LoginData } from '@/entities/session';
import { LOGIN_FORM_TEXT } from '../config/login-form-text';
import { useLoginForm } from '../model/use-login-form';
import ShowPasswordButton from './ShowPasswordButton';
import LoginFormLayout from './LoginFormLayout';

const { email, password, submitButton } = LOGIN_FORM_TEXT;

const LoginForm = () => {
  const { methods, isFormDisabled, isSubmitButtonDisabled, formErrorMessage, onSubmit } =
    useLoginForm();
  const { type, isVisible, toggleVisibility } = useShowPassword();

  return (
    <FormProvider {...methods}>
      <Form<LoginData> onSubmit={onSubmit} width="100%">
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
