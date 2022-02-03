import MovieListing from '../movie-listing/movie-listing';
import movieApi from '../../common/apis/api';
import key from '../../common/apis/api-key';

const Home = () => {
  const movieText = 'Harry';
  const fetchMovies = async () => {
    const response = await movieApi
      .get(`?apikey=${key}&s=${movieText}&type=movie`)
      .catch((err) => console.log('The response from the API:', err));
    console.log(response);
  };
  fetchMovies();
  return (<div>
    <div className="banner-img"></div>
    <MovieListing />
  </div>
  )
};

export default Home;
