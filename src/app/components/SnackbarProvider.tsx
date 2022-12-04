import Snackbar from '@mui/material/Snackbar';
import { FC, ReactNode } from 'react';
import { useAppSelector } from '../hooks';

const SnackbarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen: isSnackbarOpen, message: snackbarMessage } = useAppSelector(
    (state) => state.snackbar
  );

  return (
    <>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isSnackbarOpen}
        message={snackbarMessage}
      />
    </>
  );
};

export default SnackbarProvider;
