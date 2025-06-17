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

  return (
    <Button
      component="label"
      role={undefined}
      size="small"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      {...buttonMuiProps}
    >
      {label}
      <input {...register(name)} type="file" accept={accept} style={{ display: 'none' }} />
    </Button>
  );
};

export default UploadFileButton;
