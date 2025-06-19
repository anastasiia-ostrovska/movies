export const ADD_MOVIE_FORM_TEXT = {
  form: {
    successText: 'Good job! Movie is successfully added',
    errorText: 'This movie is already exists. Please try adding a new movie.',
  },
  movie: {
    title: {
      name: 'title',
      label: 'Movie Title',
      helperText: 'What movie do you wanna add?',
      errorText: {
        required: 'Please, write a valid title',
      },
    },
    year: {
      name: 'year',
      label: 'Release Year',
      helperText: 'What year was it released?',
      errorText: {
        required: 'Please, write a valid year',
      },
    },
    format: {
      name: 'format',
      label: 'Movie Format',
      helperText: 'Pick one of formats',
      errorText: {
        required: 'You should pick the movie format',
      },
    },
    actors: {
      name: 'actors',
      label: 'Names of Actors',
      helperText: 'Write names of actor, separated with comma ","',
      errorText: {
        required: 'Please, write names in valid format',
      },
    },
  },
  submitButton: { label: 'Save Movie' },
};
