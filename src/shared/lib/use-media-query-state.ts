import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

interface MediaQueryTypeState {
  isUpSM: boolean;
  isUpMD: boolean;
  isUpLG: boolean;
  isUpXL: boolean;
}

export const useMediaQueryState = (): MediaQueryTypeState => {
  const theme = useTheme();
  const isUpSM = useMediaQuery(theme.breakpoints.up('sm'));
  const isUpMD = useMediaQuery(theme.breakpoints.up('md'));
  const isUpLG = useMediaQuery(theme.breakpoints.up('lg'));
  const isUpXL = useMediaQuery(theme.breakpoints.up('xl'));

  return { isUpSM, isUpMD, isUpLG, isUpXL };
};
