/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Slider from 'react-slick';
import { getAllMovies, getAllShows } from '../../features/movies/movie-slice';
import MovieCard from '../movie-card/movie-card';
import settings from '../../common/settings';
import './movie-listing.scss';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies = '';
  let renderShows = '';

  if (movies.Response === 'True') {
    renderMovies = movies.Search.map((movie) => {
      const index = uuidv4();
      return <MovieCard key={index} data={movie} />;
    });
  } else {
    renderMovies = (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );
  }

  if (shows.Response === 'True') {
    renderShows = shows.Search.map((show) => {
      const index = uuidv4();
      return <MovieCard key={index} data={show} />;
    });
  } else {
    renderShows = (
      <div className="movies-error">
        <h3>{shows.error}</h3>
      </div>
    );
  }

  return (
    <div className="movie-wrap">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <Slider {...settings}>{renderShows}</Slider>
      </div>
    </div>
  );
};

export default MovieListing;
