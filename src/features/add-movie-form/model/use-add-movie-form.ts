import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/model';
import { DEFAULT_ERROR_MESSAGES } from '@/shared/configs';
import { type NewMovieFormatted, type NewMovie, useCreateMovieMutation } from '@/entities/movie';
import { ADD_MOVIE_FORM_TEXT } from '../configs/add-movie-form-text';
import { MOVIE_FORMATS } from '../configs/movie-formats';
import { formatActors } from '@/features/add-movie-form/lib/formatActors';

const { form, movie } = ADD_MOVIE_FORM_TEXT;
const { title, year, format, actors } = movie;
const defaultValues = {
  [title.name]: '',
  [year.name]: '',
  [format.name]: MOVIE_FORMATS[0].value,
  [actors.name]: '',
};

export const useAddMovieForm = () => {
  const methods = useForm<NewMovieFormatted>({
    defaultValues,
    mode: 'onTouched',
  });

  const {
    reset,
    formState: { dirtyFields, isSubmitting, isSubmitSuccessful },
  } = methods;

  // Create mutation on submitting
  const [
    add,
    { data: addResponse, isLoading: isAdding, isSuccess: addSuccess, isError: isAddMovieError },
  ] = useCreateMovieMutation();
  const [formSuccessMessage, setFormSuccessMessage] = useState('');
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSubmitSuccessful && addSuccess) {
      if (addResponse?.status === 1) {
        reset();
        setFormSuccessMessage(form.successText);
        setFormErrorMessage('');
      }
      if (addResponse?.status === 0) {
        if (addResponse?.error?.code === 'MOVIE_EXISTS') {
          setFormErrorMessage(form.errorText);
        }
        setFormErrorMessage(DEFAULT_ERROR_MESSAGES.unexpected);
      }
    }
  }, [isSubmitSuccessful, reset, dispatch, addSuccess, addResponse]);

  // Response error message
  useEffect(() => {
    if (isAddMovieError) {
      setFormErrorMessage(DEFAULT_ERROR_MESSAGES.unexpected);
    }
  }, [isAddMovieError]);

  // Submit handler
  const onSubmit = (data: NewMovie) => {
    const { actors } = data;
    const formatedData = {
      ...data,
      actors: formatActors(actors),
    };

    add(formatedData);
  };

  // Disabled states
  const isEmptyField = !dirtyFields.title || !dirtyFields.actors || !dirtyFields.year;
  const isFormDisabled = isSubmitting || isAdding;
  const isSubmitButtonDisabled = isEmptyField || isFormDisabled;

  return {
    methods,
    isFormDisabled,
    isSubmitButtonDisabled,
    formSuccessMessage,
    formErrorMessage,
    onSubmit,
  };
};
