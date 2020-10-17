import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/prop-types-for-films";
import propsForReviews from "../../mocks/prop-types-for-reviws";

export default class TabsForMoviePageScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Overview: true,
      Details: false,
      Reviews: false
    };
    this._handleClickOverview = this._handleClickOverview.bind(this);
    this._handleClickDetails = this._handleClickDetails.bind(this);
    this._handleClickReviews = this._handleClickReviews.bind(this);
  }

  _handleClickOverview(evt) {
    evt.preventDefault();
    this.setState({Overview: true, Details: false, Reviews: false});
  }

  _handleClickDetails(evt) {
    evt.preventDefault();
    this.setState({Overview: false, Details: true, Reviews: false});
  }

  _handleClickReviews(evt) {
    evt.preventDefault();
    this.setState({Overview: false, Details: false, Reviews: true});
  }

  render() {
    const {films, reviews} = this.props;
    const {Overview, Details, Reviews} = this.state;
    const {genre, releaseYear, commonScore, numberOfVotes, cast, producer, descriptionFilm, duration} = films[0];
    const reviewsFilm = reviews[0].review;
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
                <a onClick={this._handleClickOverview} href="#" className="movie-nav__link">Overview</a>
              </li>
              <li className={`movie-nav__item  ${Details ? `movie-nav__item--active` : ``}`}>
                <a onClick={this._handleClickDetails} href="#" className="movie-nav__link">Details</a>
              </li>
              <li className={`movie-nav__item  ${Reviews ? `movie-nav__item--active` : ``}`}>
                <a onClick={this._handleClickReviews} href="#" className="movie-nav__link">Reviews</a>
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

                <p className="movie-card__starring"><strong>Starring: {cast}</strong></p>
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
                      {cast}
                    </span>
                  </p>
                </div>

                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Run Time</strong>
                    <span className="movie-card__details-value">{duration}</span>
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
                  {reviewsFilm.map((review) => (
                    <div key={review.id} className="review">
                      <blockquote className="review__quote">
                        <p className="review__text">{review.textReview}</p>

                        <footer className="review__details">
                          <cite className="review__author">{review.nameUser}</cite>
                          <time className="review__date" dateTime="2016-12-24">{review.dateReview}</time>
                        </footer>
                      </blockquote>
                      <div className="review__rating">8,9</div>
                    </div>
                  ))}
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </Fragment>
    );
  }
}

TabsForMoviePageScreen.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  reviews: propsForReviews
};
