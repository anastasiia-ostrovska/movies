import type { MouseEventHandler } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import { LOGIN_FORM_TEXT } from '../config/login-form-text';

interface ShowPasswordButtonProps {
  isPasswordVisible: boolean;
  toggleVisibility: MouseEventHandler<HTMLButtonElement>;
}

const ShowPasswordButton = ({ isPasswordVisible, toggleVisibility }: ShowPasswordButtonProps) => {
  const preventMouseEvent: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault();
  };

  const { hidePassword, showPassword } = LOGIN_FORM_TEXT.showPasswordButton;

  return (
    <Box
      component="button"
      aria-label={isPasswordVisible ? hidePassword : showPassword}
      onClick={toggleVisibility}
      onMouseDown={preventMouseEvent}
      onMouseUp={preventMouseEvent}
    >
      <InputAdornment position="end">
        {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
      </InputAdornment>
    </Box>
  );
};

export default ShowPasswordButton;
