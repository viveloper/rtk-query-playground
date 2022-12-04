import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import counterReducer from '../features/counter/counterSlice';
import snackbarReducer from '../features/snackbar/snackbarSlice';
import { rtkQueryErrorLogger } from './middlewares/rtkQueryErrorLogger';
import { pokemonApi } from './services/pokemon';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    snackbar: snackbarReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware, rtkQueryErrorLogger),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
