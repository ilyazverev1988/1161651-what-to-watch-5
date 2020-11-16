import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import propsForFilms from "../../prop-types/prop-types-for-films";
import {Link} from "react-router-dom";
import {returnFilmsIsFavorite} from "../../utils";
import Avatar from "../avatar/avatar";

const MyList = (props) => {
  let {filmActive, films, handleMouseEnterFilm, handleMouseOverFilm} = props;
  const myFilm = returnFilmsIsFavorite(films);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={`/`} href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <Avatar/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {myFilm.map((film) => <SmallMovieCard isActive={filmActive === film.id}
            key={film.nameFilm} film={film} onMouseEnterCard={()=>{
              handleMouseEnterFilm(film);
            }} onMouseOverCard={handleMouseOverFilm}/>)}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to={`/`} href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  filmActive: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleMouseEnterFilm: PropTypes.func.isRequired,
  handleMouseOverFilm: PropTypes.func.isRequired
};

export default MyList;
