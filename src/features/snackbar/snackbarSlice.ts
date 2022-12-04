import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SnackbarState {
  isOpen: boolean;
  message: string;
}

const initialState: SnackbarState = {
  isOpen: false,
  message: '',
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    resetSnackbar: (state) => {
      state.isOpen = initialState.isOpen;
      state.message = initialState.message;
    },
    setSnackbar: (state, action: PayloadAction<SnackbarState>) => {
      state.isOpen = action.payload.isOpen;
      state.message = action.payload.message;
    },
  },
});

export const { resetSnackbar, setSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
