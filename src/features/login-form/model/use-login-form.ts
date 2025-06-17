import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/model';
import { DEFAULT_ERROR_MESSAGES } from '@/shared/configs';
import { type LoginData, storeAccessToken, useLoginMutation } from '@/entities/session';
import { LOGIN_FORM_TEXT } from '../config/login-form-text.ts';

const defaultValues = {
  email: '',
  password: '',
};

export const useLoginForm = () => {
  const methods = useForm<LoginData>({
    defaultValues,
    mode: 'onTouched',
  });

  const {
    reset,
    formState: { dirtyFields, isSubmitting, isSubmitSuccessful },
  } = methods;

  const [formErrorMessage, setFormErrorMessage] = useState('');

  // Login mutation on submitting
  const [
    login,
    {
      data: loginResponse,
      isLoading: isLoginRequestLoading,
      isSuccess: loginRequestSuccess,
      isError: isLoginRequestError,
    },
  ] = useLoginMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSubmitSuccessful && loginRequestSuccess) {
      if (loginResponse.status === 1) {
        reset();
        setFormErrorMessage('');
        dispatch(storeAccessToken(loginResponse.token));
      }
      if (loginResponse.status === 0) {
        setFormErrorMessage(LOGIN_FORM_TEXT.form.errorText);
      }
    }
  }, [isSubmitSuccessful, loginRequestSuccess, reset, loginResponse, dispatch]);

  // Response error message
  useEffect(() => {
    if (isLoginRequestError) {
      setFormErrorMessage(DEFAULT_ERROR_MESSAGES.unexpected);
    }
  }, [isLoginRequestError]);

  // Submit handler
  const onSubmit = (data: LoginData) => {
    login(data);
  };

  // Disabled states
  const isEmptyField = !dirtyFields.email || !dirtyFields.password;
  const isFormDisabled = isSubmitting || isLoginRequestLoading;
  const isSubmitButtonDisabled = isEmptyField || isFormDisabled;

  return { methods, isFormDisabled, isSubmitButtonDisabled, formErrorMessage, onSubmit };
};
