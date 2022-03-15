import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from '../features/searchResults/searchResultsSlice';

export const store = configureStore({
  reducer: {
    searchResults: searchResultsReducer,
  },
});
