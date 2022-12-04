import {
  resetSnackbar,
  setSnackbar,
} from '../../features/snackbar/snackbarSlice';
import { useAppDispatch } from '../hooks';

const useSnackbar = () => {
  const dispatch = useAppDispatch();
  const snackbar = (message: string, duration: number) => {
    dispatch(
      setSnackbar({
        isOpen: true,
        message,
      })
    );
    setTimeout(() => {
      dispatch(resetSnackbar());
    }, duration);
  };
  return { snackbar };
};

export default useSnackbar;
