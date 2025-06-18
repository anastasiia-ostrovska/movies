import type { ReactNode } from 'react';
import Skeleton from '@mui/material/Skeleton';

interface SkeletonTextProps {
  isLoading: boolean;
  element: ReactNode;
}

const SkeletonText = ({ isLoading, element }: SkeletonTextProps) => {
  return isLoading ? <Skeleton /> : element || null;
};

export default SkeletonText;
