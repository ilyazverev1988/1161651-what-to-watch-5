import React, {Fragment} from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/prop-types-for-films";
import propsForReviews from "../../mocks/prop-types-for-reviws";
import {returnStarringOfFilms, returnFilmTime, returnTestStarringOfFilms} from "../../utils";
import {returnTimeForComment} from "../../utils";

const TabsForMoviePageScreen = (props) => {
  const {Overview, Details, Reviews, handleClickOverview, handleClickDetails, handleClickReviews, film, reviews} = props;
  const {genre, releaseYear, commonScore, numberOfVotes, cast, producer, descriptionFilm, duration} = film;
  const reviewsForFirstColumn = reviews.slice(0, Math.round(reviews.length / 2));
  const reviewsForSecondColumn = reviews.slice(Math.round(reviews.length / 2), reviews.length);
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
    <Fragment>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className={`movie-nav__item  ${Overview ? `movie-nav__item--active` : ``}`}>
              <a onClick={handleClickOverview} href="#" className="movie-nav__link">Overview</a>
            </li>
            <li className={`movie-nav__item  ${Details ? `movie-nav__item--active` : ``}`}>
              <a onClick={handleClickDetails} href="#" className="movie-nav__link">Details</a>
            </li>
            <li className={`movie-nav__item  ${Reviews ? `movie-nav__item--active` : ``}`}>
              <a onClick={handleClickReviews} href="#" className="movie-nav__link">Reviews</a>
            </li>
          </ul>
        </nav>
        {Overview && (
          <Fragment>
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

              <p className="movie-card__starring"><strong>Starring: {returnStarringOfFilms(cast)}</strong></p>
            </div>
          </Fragment>
        )}

        {Details && (
          <Fragment>
            <div className="movie-card__text movie-card__row">
              <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Director</strong>
                  <span className="movie-card__details-value">{producer}</span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Starring</strong>
                  <span className="movie-card__details-value">
                    {returnTestStarringOfFilms(cast)}
                  </span>
                </p>
              </div>

              <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Run Time</strong>
                  <span className="movie-card__details-value">{returnFilmTime(duration)}</span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Genre</strong>
                  <span className="movie-card__details-value">{genre}</span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Released</strong>
                  <span className="movie-card__details-value">{releaseYear}</span>
                </p>
              </div>
            </div>
          </Fragment>
        )}

        {Reviews && (
          <Fragment>
            <div className="movie-card__reviews movie-card__row">
              <div className="movie-card__reviews-col">
                {reviewsForFirstColumn.map((review) => (
                  <div key={review.id} className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">{review.comment}</p>

                      <footer className="review__details">
                        <cite className="review__author">{review.user.name}</cite>
                        <time className="review__date" dateTime="2016-12-24">{returnTimeForComment(review.date)}</time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">{review.rating}</div>
                  </div>
                ))}
              </div>
              <div className="movie-card__reviews-col">
                {reviewsForSecondColumn.map((review) => (
                  <div key={review.id} className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">{review.comment}</p>

                      <footer className="review__details">
                        <cite className="review__author">{review.user.name}</cite>
                        <time className="review__date" dateTime="2016-12-24">{returnTimeForComment(review.date)}</time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">{review.rating}</div>
                  </div>
                ))}
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

TabsForMoviePageScreen.propTypes = {
  film: propsForFilms,
  reviews: propsForReviews,
  Overview: PropTypes.bool.isRequired,
  Details: PropTypes.bool.isRequired,
  Reviews: PropTypes.bool.isRequired,
  handleClickOverview: PropTypes.func.isRequired,
  handleClickDetails: PropTypes.func.isRequired,
  handleClickReviews: PropTypes.func.isRequired
};

export default TabsForMoviePageScreen;
