import * as toolkit from '@reduxjs/toolkit';
import movieApi from '../../common/apis/api';
import apiKey from '../../common/apis/api-key';

export const fetchAsyncMovies = toolkit.createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
  const response = await movieApi
    .get(`?apiKey=${apiKey}&s=${term}&type=movie`);
  return response.data;
});

export const fetchAsyncShow = toolkit.createAsyncThunk('movies/fetchAsyncShow', async (term) => {
  const response = await movieApi
    .get(`?apiKey=${apiKey}&s=${term}&type=series`);
  return response.data;
});

export const fetchAsyncMoviesOrShowDetails = toolkit.createAsyncThunk('movies/fetchAsyncMoviesOrShowDetails', async (id) => {
  const response = await movieApi
    .get(`?apiKey=${apiKey}&i=${id}&Plot=full`);
  return response.data;
});

const initialState = {
  movies: [],
  shows: [],
  selectedMovieOrShow: [],
};

const movieSlice = toolkit.createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    // fetched movies successfully
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => ({ ...state, movies: payload }),
    // fetched show successfully
    [fetchAsyncShow.fulfilled]: (state, { payload }) => ({ ...state, shows: payload }),
    [fetchAsyncMoviesOrShowDetails.fulfilled]: (state, { payload }) => (
      { ...state, selectedMovieOrShow: payload }
    ),
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
