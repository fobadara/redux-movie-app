import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.scss';
import Home from './components/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MovieDetails from './components/movie-details/movie-details';
import PageNotFound from './components/page-not-found/page-not-found';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
