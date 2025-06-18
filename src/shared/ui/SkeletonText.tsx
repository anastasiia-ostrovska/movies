import Skeleton from '@mui/material/Skeleton';

const SkeletonText = ({ isLoading, element }: LoaderProps) => {
  return isLoading ? <Skeleton /> : element || null;
};

export default SkeletonText;
