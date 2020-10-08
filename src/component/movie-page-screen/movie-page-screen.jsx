import React from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/prop-types-for-films";
import propsForReviews from "../../mocks/prop-types-for-reviws";

const MoviePage = (props) => {
  // eslint-disable-next-line no-unused-vars
  const {films, reviews, onPlayButtonClick, onListButtonClick, onAddReviewButtonClick, onLogoLinkClick} = props;
  const {nameFilm, genre, releaseYear, filmCover, poster, commonScore, numberOfVotes, cast, producer, descriptionFilm} = films[0];
  let textRating;
  if (commonScore >= 0 && commonScore < 3) {
    textRating = `Bad`;
  } else if (commonScore >= 3 && commonScore < 5) {
    textRating = `Normal`;
  } else if (commonScore >= 5 && commonScore < 8) {
    textRating = `Good`;
  } else if (commonScore >= 8 && commonScore < 10) {
    textRating = `Very good`;
  } else if (commonScore === 10) {
    textRating = `Awesome`;
  }

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={filmCover} alt={nameFilm}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a onClick={(evt)=>{
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
              <a onClick={(evt)=>{
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

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item movie-nav__item--active">
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="movie-rating">
              <div className="movie-rating__score">{commonScore}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{textRating}</span>
                <span className="movie-rating__count">{numberOfVotes} ratings</span>
              </p>
            </div>

            <div className="movie-card__text">
              <p>{descriptionFilm}</p>

              <p className="movie-card__director"><strong>Director: {producer}</strong></p>

              <p className="movie-card__starring"><strong>Starring: {cast}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MoviePage.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  reviews: propsForReviews,
  onPlayButtonClick: PropTypes.func.isRequired,
  onListButtonClick: PropTypes.func.isRequired,
  onAddReviewButtonClick: PropTypes.func.isRequired,
  onLogoLinkClick: PropTypes.func.isRequired
};

export default MoviePage;
