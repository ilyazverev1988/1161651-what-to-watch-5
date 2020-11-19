import React from "react";
import PropTypes from "prop-types";
import ListFilm from "../list-films/list-film";
import ListOfGenres from "../list-of-genres/list-of-genres";
import propsForFilms from "../../prop-types/prop-types-for-films";
import {connect} from "react-redux";
import ButtonShowMore from "../button-show-more/button-show-more";
import {getFilmsByGenre} from "../../store/selectors";
import {Link} from "react-router-dom";
import {addPromoToFavorite} from "../../store/api-action";
import {store} from "../../index";
import {ActionCreator} from "../../store/action";
import Avatar from "../avatar/avatar";

const Mainscreen = (props) => {
  const {films, listOfCardsFilm, cardsOfShownFilms, filmPromo} = props;
  let nameFilm;
  let filmCover;
  let poster;
  let genre;
  let releaseYear;
  let isFavorite;

  if (filmPromo) {
    nameFilm = filmPromo.nameFilm;
    filmCover = filmPromo.filmCover;
    poster = filmPromo.poster;
    genre = filmPromo.genre;
    releaseYear = filmPromo.releaseYear;
    isFavorite = filmPromo.isFavorite;
  }

  return (
    <React.Fragment>
      {films.length === 0 ? <p>LOADING...</p> :
        <React.Fragment>
          <section className="movie-card">
            <div className="movie-card__bg">
              <img src={filmCover} alt={nameFilm}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>
              <Avatar/>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__info">
                <div className="movie-card__poster">
                  <img src={poster} alt={nameFilm} width="218"
                    height="327"/>
                </div>

                <div className="movie-card__desc">
                  <h2 className="movie-card__title">{nameFilm}</h2>
                  <p className="movie-card__meta">
                    <span className="movie-card__genre">{genre}</span>
                    <span className="movie-card__year">{releaseYear}</span>
                  </p>

                  <div className="movie-card__buttons">
                    <Link to={`/player/1`} className="btn btn--play movie-card__button" type="button">
                      <svg viewBox="0 0 19 19" width="19" height="19">
                        <use xlinkHref="#play-s"></use>
                      </svg>
                      <span>Play</span>
                    </Link>
                    <a onClick={()=>{
                      store.dispatch(addPromoToFavorite(1, isFavorite));
                    }} className="btn btn--list movie-card__button" type="button">
                      {isFavorite ? <svg viewBox="0 0 18 14" width="18" height="14">
                        <use xlinkHref="#in-list"/>
                      </svg> : <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"/>
                      </svg>}
                      <span>My list</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="page-content">
            <section className="catalog">
              <h2 className="catalog__title visually-hidden">Catalog</h2>

              <ListOfGenres/>

              <ListFilm films={listOfCardsFilm.slice(0, cardsOfShownFilms)}/>

              {listOfCardsFilm.length > cardsOfShownFilms ? <ButtonShowMore/> : null}

            </section>

            <footer className="page-footer">
              <div className="logo">
                <a className="logo__link logo__link--light">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <div className="copyright">
                <p>© 2019 What to watch Ltd.</p>
              </div>
            </footer>
          </div>
        </React.Fragment>
      }
    </React.Fragment>
  );
};

Mainscreen.propTypes = {
  filmPromo: propsForFilms,
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  listOfCardsFilm: PropTypes.arrayOf(propsForFilms).isRequired,
  cardsOfShownFilms: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateDataFilm(film) {
    dispatch(ActionCreator.updateDataFilm(film));
  },
});

const mapStateToProps = ({FILM, DATA}) => ({
  listOfCardsFilm: getFilmsByGenre({FILM, DATA}),
  cardsOfShownFilms: FILM.cardsOfShownFilms,
  filmPromo: DATA.filmPromo,
});

export {Mainscreen};
export default connect(mapStateToProps, mapDispatchToProps)(Mainscreen);
