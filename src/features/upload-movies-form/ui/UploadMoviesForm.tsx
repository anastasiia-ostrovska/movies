import { Form } from '@/shared/form';
import { FormProvider } from 'react-hook-form';
import Button from '@mui/material/Button';
import UploadFileButton from '@/shared/form/UploadFileButton';
import type { MoviesFile } from '@/entities/movie';
import { UPLOAD_MOVIES_FORM_TEXT } from '../configs/upload-movies-form-text';
import { useUploadMoviesForm } from '../model/use-upload-movies-form';
import UploadMoviesFormLayout from './UploadMoviesFormLayout';

const { movies, submitButton } = UPLOAD_MOVIES_FORM_TEXT;

const UploadMoviesForm = () => {
  const {
    methods,
    isFormDisabled,
    isSubmitButtonDisabled,
    formSuccessMessage,
    fileName,
    onSubmit,
  } = useUploadMoviesForm();

  return (
    <FormProvider {...methods}>
      <Form<MoviesFile> onSubmit={onSubmit} width="100%">
        <UploadMoviesFormLayout
          fileName={fileName}
          uploadButton={
            <UploadFileButton
              name={movies.name}
              label={movies.label}
              disabled={isFormDisabled}
              sx={{ width: { xs: '100%', sm: 250 }, height: 36 }}
            />
          }
          submitButton={
            <Button
              type="submit"
              disabled={isSubmitButtonDisabled}
              variant="outlined"
              sx={{ height: 36 }}
            >
              {submitButton.label}
            </Button>
          }
          successMessage={formSuccessMessage}
        />
      </Form>
    </FormProvider>
  );
};

export default UploadMoviesForm;
