import { useDeleteMovieMutation } from '@/entities/movie';

export const useDeleteMovie = (id: number) => {
  const [deleteMovie, { isLoading: isDeleting }] = useDeleteMovieMutation();

  const handleDeleteCLick = () => {
    deleteMovie(id);
  };

  const deleteButtonDisabled = isDeleting || isDeleting;

  return { deleteButtonDisabled, handleDeleteCLick };
};
