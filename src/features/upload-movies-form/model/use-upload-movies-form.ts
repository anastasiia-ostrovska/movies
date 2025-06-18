import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/model';
import { type MoviesFile, useAddMoviesFileMutation } from '@/entities/movie';
import { UPLOAD_MOVIES_FORM_TEXT } from '@/features/upload-movies-form/configs/upload-movies-form-text';

const { movies, form } = UPLOAD_MOVIES_FORM_TEXT;
const defaultValues = {
  [movies.name]: null,
};

export const useUploadMoviesForm = () => {
  const methods = useForm<MoviesFile>({
    defaultValues,
    mode: 'onTouched',
  });

  const {
    reset,
    watch,
    formState: { dirtyFields, isSubmitting, isSubmitSuccessful },
  } = methods;

  // Upload mutation on submitting
  const [upload, { data: uploadResponse, isLoading: isUploading, isSuccess: uploadSuccess }] =
    useAddMoviesFileMutation();
  const dispatch = useAppDispatch();

  const [formSuccessMessage, setFormSuccessMessage] = useState('');

  // Check the file name
  const [fileName, setFileName] = useState('');
  const watchedFile = watch('movies');
  useEffect(() => {
    if (watchedFile instanceof FileList && watchedFile.length > 0) {
      setFileName(watchedFile[0].name);
    } else {
      setFileName('');
    }
  }, [watchedFile]);

  useEffect(() => {
    if (isSubmitSuccessful && uploadSuccess) {
      if (uploadResponse.status === 1) {
        reset();
        setFormSuccessMessage(form.successText);
      }
    }
  }, [isSubmitSuccessful, reset, dispatch, uploadSuccess, uploadResponse]);

  // Submit handler
  const onSubmit = (data: MoviesFile) => {
    const file = data.movies?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append(movies.name, file);
    upload(formData);
  };

  // Disabled states
  const isEmptyField = !dirtyFields.movies;
  const isFormDisabled = isSubmitting || isUploading;
  const isSubmitButtonDisabled = isEmptyField || isFormDisabled;

  return {
    methods,
    isFormDisabled,
    isSubmitButtonDisabled,
    formSuccessMessage,
    fileName,
    onSubmit,
  };
};
