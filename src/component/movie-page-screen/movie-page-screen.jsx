import React, {Fragment} from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/prop-types-for-films";
import propsForReviews from "../../mocks/prop-types-for-reviws";
import TabsForMoviePageScreen from "../tabs-for-movie-page-screen/tabs-for-movie-page-screen";
import withTabs from "../../hocs/with-tabs/with-tabs";
import MoreLikeThisFilm from "../more-like-this-film/more-like-this-film";

const TabsInMoviePage = withTabs(TabsForMoviePageScreen);

const MoviePage = (props) => {
  const {films, reviews, onPlayButtonClick, onListButtonClick, onAddReviewButtonClick, onLogoLinkClick, onFilmCardClick} = props;
  const {nameFilm, genre, releaseYear, filmCover, poster} = films[0];
  const filmsByGenre = films.filter((film) => film.genre === genre).slice(0, 4);
  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={filmCover} alt={nameFilm}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a onClick={(evt) => {
                evt.preventDefault();
                onLogoLinkClick();
              }} href="main.html" className="logo__link">
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
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{nameFilm}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={onPlayButtonClick} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button onClick={onListButtonClick} className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
                <a onClick={(evt) => {
                  evt.preventDefault();
                  onAddReviewButtonClick();
                }}
                href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={nameFilm} width="218"
                height="327"/>
            </div>

            <TabsInMoviePage films={films} reviews={reviews}/>

          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoreLikeThisFilm films={filmsByGenre} onFilmCardClick={onFilmCardClick}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
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
    </Fragment>
  );
};

MoviePage.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  reviews: propsForReviews,
  onPlayButtonClick: PropTypes.func.isRequired,
  onListButtonClick: PropTypes.func.isRequired,
  onAddReviewButtonClick: PropTypes.func.isRequired,
  onLogoLinkClick: PropTypes.func.isRequired,
  onFilmCardClick: PropTypes.func.isRequired
};

export default MoviePage;
