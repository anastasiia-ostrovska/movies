import { useShowPassword } from '@/shared/lib';
import Button from '@mui/material/Button';
import { FormProvider } from 'react-hook-form';
import { Form, Input } from '@/shared/form';
import type { RegisterFormData } from '@/entities/users';
import ShowPasswordButton from '@/features/login-form/ui/ShowPasswordButton';
import { REGISTER_FORM_TEXT } from '../config/register-form-text';
import { useRegisterForm } from '../model/use-register-form';
import RegisterUserFormLayout from './RegisterUserFormLayout';

const { name, email, password, confirmPassword, submitButton } = REGISTER_FORM_TEXT;

const RegisterUserForm = () => {
  const { methods, isFormDisabled, isSubmitButtonDisabled, formErrorMessage, onSubmit } =
    useRegisterForm();
  const { type, isVisible, toggleVisibility } = useShowPassword();
  const {
    type: confirmPasswordType,
    isVisible: isVisibleConfirmPassword,
    toggleVisibility: toggleConfirmPasswordVisibility,
  } = useShowPassword();

  return (
    <FormProvider {...methods}>
      <Form<RegisterFormData> onSubmit={onSubmit} width="100%">
        <RegisterUserFormLayout
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
          nameInput={
            <Input
              required
              disabled={isFormDisabled}
              type={'text'}
              name={name.name}
              label={name.label}
              autoComplete={name.autoComplete}
              helperText={name.helperText}
              rules={{ required: name.errorText.required }}
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
          confirmPasswordInput={
            <Input
              required
              disabled={isFormDisabled}
              type={confirmPasswordType}
              name={confirmPassword.name}
              label={confirmPassword.label}
              autoComplete={confirmPassword.autoComplete}
              helperText={confirmPassword.helperText}
              endAdornment={
                <ShowPasswordButton
                  isPasswordVisible={isVisibleConfirmPassword}
                  toggleVisibility={toggleConfirmPasswordVisibility}
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

export default RegisterUserForm;
