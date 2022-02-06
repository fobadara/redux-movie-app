import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShow } from '../../features/movies/movie-slice';
import MovieListing from '../movie-listing/movie-listing';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Harry';
  const showText = 'Friends';
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShow(showText));
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;
