import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import avatar from '../../images/person.png';
import { fetchAsyncMovies, fetchAsyncShow } from '../../features/movies/movie-slice';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === '') return;
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShow(term));
    setTerm('');
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          Moviestopia
        </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder="Search movies or shows" onChange={(e) => setTerm(e.target.value)} />
          <button type="submit" aria-label="search"><i className="fa fa-search" aria-hidden="true" /></button>
        </form>
      </div>
      <div className="user-img">
        <img src={avatar} alt="User avatar" />
      </div>
    </header>
  );
};

export default Header;
