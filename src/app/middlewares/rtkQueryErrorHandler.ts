import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';
import {
  resetSnackbar,
  setSnackbar,
} from '../../features/snackbar/snackbarSlice';

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorHandler: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const status = action.payload.status;
      const { message } = action.payload.data;
      console.log(message);

      switch (status) {
        case 500:
          snackbar('500 Internal Server Error', api);
          break;
        case 403:
          snackbar('403 Forbidden', api);
          break;
        case 401:
          snackbar('401 Unauthorized', api);
          break;
        case 400:
          snackbar('400 Bad Request', api);
          break;
        default:
          snackbar('Error Occurred', api);
          break;
      }
    }
    return next(action);
  };

const snackbar = (message: string, api: MiddlewareAPI) => {
  api.dispatch(
    setSnackbar({
      isOpen: true,
      message,
    })
  );
  setTimeout(() => {
    api.dispatch(resetSnackbar());
  }, 2000);
};
