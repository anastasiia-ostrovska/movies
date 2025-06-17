import { type ButtonProps } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface UploadFileButtonProps extends ButtonProps {
  name: string;
  label?: string;
  accept?: string;
}

const UploadFileButton = ({
  name,
  label = 'Upload',
  accept = '.txt',
  ...buttonMuiProps
}: UploadFileButtonProps) => {
  const { register } = useFormContext();
  const fileInputId = `${name}-file-input`;

  return (
    <Button
      component="label"
      role={undefined}
      size="small"
      variant="contained"
      htmlFor={fileInputId}
      startIcon={<CloudUploadIcon />}
      {...buttonMuiProps}
    >
      {label}
      <input
        id={fileInputId}
        type="file"
        tabIndex={0}
        accept={accept}
        style={{ display: 'none' }}
        {...register(name)}
      />
    </Button>
  );
};

export default UploadFileButton;
