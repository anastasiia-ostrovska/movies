import IconButton, { type IconButtonProps } from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import { useDeleteMovie } from '../model/use-delete-movie';

interface DeleteMovieButtonProps {
  id: number;
}

type DeleteMovieButtonPropsExtended = DeleteMovieButtonProps & Omit<IconButtonProps, 'id'>;

const DeleteMovieButton = ({ id, ...buttonProps }: DeleteMovieButtonPropsExtended) => {
  const { deleteButtonDisabled, handleDeleteCLick } = useDeleteMovie(id);

  return (
    <Box sx={{ p: 1 }}>
      <IconButton
        aria-label="delete"
        disabled={deleteButtonDisabled}
        onClick={handleDeleteCLick}
        sx={{ display: 'flex', justifySelf: 'end', color: 'text.secondary' }}
        {...buttonProps}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default DeleteMovieButton;
