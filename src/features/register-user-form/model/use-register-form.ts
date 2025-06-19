import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/model';
import { DEFAULT_ERROR_MESSAGES } from '@/shared/configs';
import { storeAccessToken } from '@/entities/session';
import { type RegisterFormData, useRegisterMutation } from '@/entities/users';
import { REGISTER_FORM_TEXT } from '../config/register-form-text';

const defaultValues = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
};

const { errorText } = REGISTER_FORM_TEXT.form;

export const useRegisterForm = () => {
  const methods = useForm<RegisterFormData>({
    defaultValues,
    mode: 'onTouched',
  });

  const {
    reset,
    formState: { dirtyFields, isSubmitting, isSubmitSuccessful },
  } = methods;

  const [formErrorMessage, setFormErrorMessage] = useState('');

  // Register mutation on submitting
  const [
    register,
    {
      data: registerResponse,
      isLoading: isRegisterRequestLoading,
      isSuccess: registerRequestSuccess,
      isError: isRegisterRequestError,
    },
  ] = useRegisterMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSubmitSuccessful && registerRequestSuccess) {
      if (registerResponse.status === 1) {
        reset();
        setFormErrorMessage('');
        dispatch(storeAccessToken(registerResponse.token));
      }
      if (registerResponse.status === 0) {
        if (registerResponse.error.code === 'FORMAT_ERROR') {
          setFormErrorMessage(errorText.notEqualPasswords);
        }
        if (registerResponse.error.fields.email) {
          setFormErrorMessage(errorText.userExists);
        }
      }
    }
  }, [dispatch, isSubmitSuccessful, registerRequestSuccess, registerResponse, reset]);

  // Response error message
  useEffect(() => {
    if (isRegisterRequestError) {
      setFormErrorMessage(DEFAULT_ERROR_MESSAGES.unexpected);
    }
  }, [isRegisterRequestError]);

  // Submit handler
  const onSubmit = (data: RegisterFormData) => {
    register(data);
  };

  // Disabled states
  const isEmptyField =
    !dirtyFields.email ||
    !dirtyFields.password ||
    !dirtyFields.confirmPassword ||
    !dirtyFields.name;
  const isFormDisabled = isSubmitting || isRegisterRequestLoading;
  const isSubmitButtonDisabled = isEmptyField || isFormDisabled;

  return { methods, isFormDisabled, isSubmitButtonDisabled, formErrorMessage, onSubmit };
};
