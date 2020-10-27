import React from "react";
import PropTypes from "prop-types";
import ListFilm from "../list-films/list-film";
import ListOfGenres from "../list-of-genres/list-of-genres";
import propsForFilms from "../../mocks/prop-types-for-films";
import {connect} from "react-redux";
import ButtonShowMore from "../button-show-more/button-show-more";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {getFilmsByGenre} from "../../store/selectors";

const ListFilmWithActive = withActiveItem(ListFilm);

const Mainscreen = (props) => {
  const {films, onListButtonClick, onFilmCardClick, onPlayButtonClick, listOfCardsFilm, cardsOfShownFilms} = props;
  const {nameFilm, genre, releaseYear, filmCover} = films[0];
  return (
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

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={filmCover} alt={nameFilm} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{nameFilm}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={onPlayButtonClick} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button onClick={onListButtonClick} className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ListOfGenres/>

          <ListFilmWithActive films={listOfCardsFilm.slice(0, cardsOfShownFilms)} onFilmCardClick={onFilmCardClick}/>

          { listOfCardsFilm.length > cardsOfShownFilms ? <ButtonShowMore/> : null }

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
  );
};

Mainscreen.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  listOfCardsFilm: PropTypes.arrayOf(propsForFilms).isRequired,
  cardsOfShownFilms: PropTypes.number.isRequired,
  onListButtonClick: PropTypes.func.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({FILM}) => ({
  listOfCardsFilm: getFilmsByGenre(FILM),
  cardsOfShownFilms: FILM.cardsOfShownFilms
});

export {Mainscreen};
export default connect(mapStateToProps, null)(Mainscreen);
