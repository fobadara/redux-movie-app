import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/movie-slice';

const store = configureStore({
  reducer: { movies: moviesReducer },
});

export default store;
