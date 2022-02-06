import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAsyncMoviesOrShowDetails, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies/movie-slice';
import './movie-details.scss';

const MovieDetails = () => {
  const imdbID = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShowDetails(imdbID.imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <>
      <div className="movie-title">{data.Title}</div>
      <div className="movie-section">
        {Object.keys(data).length === 0 ? (<div>Loading...</div>) : (
          <>
            <div className="section-left">
              <div className="movie-rating">
                <span>
                  IMDB Rating
                  {' '}
                  <i className="fa fa-star" />
                  :
                  {' '}
                  {data.imdbRating}
                </span>
                <span>
                  IMDB Votes
                  {' '}
                  <i className="fa fa-thumbs-up" />
                  :
                  {' '}
                  {data.imdbVotes}
                </span>
                <span>
                  IMDB Runtime
                  {' '}
                  <i className="fa fa-film" />
                  :
                  {' '}
                  {data.Runtime}
                </span>
                <span>
                  Released
                  {' '}
                  <i className="fa fa-calendar" />
                  :
                  {' '}
                  {data.Released}
                </span>
              </div>
              <div className="movie-plot">
                {data.Plot}
              </div>
              <div className="movie-info">
                <div>
                  <span>Director</span>
                  <span>{data.Director}</span>
                </div>
                <div>
                  <span>Stars</span>
                  <span>{data.Actors}</span>
                </div>
                <div>
                  <span>Genres</span>
                  <span>{data.Genre}</span>
                </div>
                <div>
                  <span>Languages</span>
                  <span>{data.Language}</span>
                </div>
                <div>
                  <span>Awards</span>
                  <span>{data.Awards}</span>
                </div>
              </div>
            </div>
            <div className="section-right">
              <img src={data.Poster} alt={data.Title} width="210" />
            </div>
          </>
        )}
      </div>

    </>
  );
};

export default MovieDetails;
