import { AddMovieForm } from '@/features/add-movie-form';
import { UploadMoviesForm } from '@/features/upload-movies-form';

export const ACCORDION_ITEMS = {
  addMovie: {
    id: 'add-movie',
    title: 'Create and add a new movie',
    content: <AddMovieForm />,
  },
  uploadMoviesFile: {
    id: 'upload-movies',
    title: 'Upload a file with movies info',
    content: <UploadMoviesForm />,
  },
};