import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import propsForFilms from "../../prop-types/prop-types-for-films";
import {Link} from "react-router-dom";
import {returnFilmsIsFavorite} from "../../utils";
import Avatar from "../avatar/avatar";

const MyList = (props) => {
  const [internalState, setInternalState] = useState({
    filmActive: ``,
  });
  let {filmActive} = internalState;
  let {films} = props;
  let timerId;
  const myFilm = returnFilmsIsFavorite(films);
  useEffect(()=>{
    return () => {
      setInternalState(
          Object.assign(
              {}, internalState, {
                filmActive: ``
              }));
      clearTimeout(timerId);
    };
  }, []);
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
              timerId = setTimeout(() =>
                setInternalState(
                    Object.assign(
                        {}, internalState, {
                          filmActive: film.id
                        })), 1000);
            }} onMouseOverCard={()=>{
              clearTimeout(timerId);
              setInternalState(
                  Object.assign(
                      {}, internalState, {
                        filmActive: ``
                      }));
            }}/>)}
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
};

export default MyList;
