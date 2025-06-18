import { FormProvider } from 'react-hook-form';
import Button from '@mui/material/Button';
import { Form, Input } from '@/shared/form';
import type { NewMovie } from '@/entities/movie';
import { ADD_MOVIE_FORM_TEXT } from '../configs/add-movie-form-text';
import { MOVIE_FORMATS } from '../configs/movie-formats';
import { useAddMovieForm } from '../model/use-add-movie-form';
import AddMovieFormLayout from './AddMovieFormLayout';

const { movie, submitButton } = ADD_MOVIE_FORM_TEXT;
const { title, year, format, actors } = movie;

const AddMovieForm = () => {
  const {
    methods,
    isFormDisabled,
    isSubmitButtonDisabled,
    formSuccessMessage,
    formErrorMessage,
    onSubmit,
  } = useAddMovieForm();

  return (
    <FormProvider {...methods}>
      <Form<NewMovie> onSubmit={onSubmit} width="100%">
        <AddMovieFormLayout
          titleInput={
            <Input
              required
              disabled={isFormDisabled}
              type={'text'}
              name={title.name}
              label={title.label}
              helperText={title.helperText}
              rules={{ required: title.errorText.required }}
            />
          }
          yearInput={
            <Input
              required
              disabled={isFormDisabled}
              type={'number'}
              name={year.name}
              label={year.label}
              helperText={year.helperText}
              rules={{ required: year.errorText.required }}
            />
          }
          formatInput={
            <Input
              required
              select
              disabled={isFormDisabled}
              type={'select'}
              name={format.name}
              label={format.label}
              helperText={format.helperText}
              rules={{ required: format.errorText.required }}
              menuItems={MOVIE_FORMATS}
            />
          }
          actorsInput={
            <Input
              required
              multiline
              rows={3}
              disabled={isFormDisabled}
              type={'text'}
              name={actors.name}
              label={actors.label}
              helperText={actors.helperText}
              rules={{ required: actors.errorText.required }}
            />
          }
          submitButton={
            <Button
              type="submit"
              disabled={isSubmitButtonDisabled}
              variant="outlined"
              sx={{ width: 'fit-content' }}
            >
              {submitButton.label}
            </Button>
          }
          formErrorMessage={formErrorMessage}
          successMessage={formSuccessMessage}
        />
      </Form>
    </FormProvider>
  );
};

export default AddMovieForm;
