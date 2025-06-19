import IconButton, { type IconButtonProps } from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteMovie } from '../model/use-delete-movie';

interface DeleteMovieButtonProps {
  id: number;
  isLoading: boolean;
}

type DeleteMovieButtonPropsExtended = DeleteMovieButtonProps & Omit<IconButtonProps, 'id'>;

const DeleteMovieButton = ({ id, isLoading, ...buttonProps }: DeleteMovieButtonPropsExtended) => {
  const { deleteButtonDisabled, handleDeleteCLick } = useDeleteMovie(id);

  return (
    <IconButton
      aria-label="delete movie"
      onClick={handleDeleteCLick}
      disabled={deleteButtonDisabled || isLoading}
      {...buttonProps}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteMovieButton;
