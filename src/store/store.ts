import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/cars/carSlice';

// Configure the Redux store
export const store = configureStore({
  reducer: {
    // Attach the carReducer to the 'cars' slice of state
    cars: carReducer,
  },
});

// Infer the RootState type from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Infer the AppDispatch type from the store's dispatch method
export type AppDispatch = typeof store.dispatch;