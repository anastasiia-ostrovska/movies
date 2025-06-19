import IconButton, { type IconButtonProps } from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import { useDeleteMovie } from '../model/use-delete-movie';

interface DeleteMovieButtonProps {
  id: number;
  isLoading: boolean;
}

type DeleteMovieButtonPropsExtended = DeleteMovieButtonProps & Omit<IconButtonProps, 'id'>;

const DeleteMovieButton = ({ id, isLoading, ...buttonProps }: DeleteMovieButtonPropsExtended) => {
  const { deleteButtonDisabled, handleDeleteCLick } = useDeleteMovie(id);

  return (
    <Box sx={{ p: 1 }}>
      <IconButton
        aria-label="delete movie"
        onClick={handleDeleteCLick}
        disabled={deleteButtonDisabled || isLoading}
        sx={{ display: 'flex', justifySelf: 'end', color: 'text.secondary' }}
        {...buttonProps}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default DeleteMovieButton;
