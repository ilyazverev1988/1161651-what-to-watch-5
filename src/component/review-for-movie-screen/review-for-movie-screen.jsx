import React from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/prop-types-for-films";
import ReviewForm from "../review-form/review-form";
import withReviewForm from "../../hocs/with-review-form/with-review-form";

const Review = withReviewForm(ReviewForm);

const ReviewForMovie = (props) => {
  const {onLogoLinkClick, films} = props;
  const {poster} = films[0];
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
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

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt="The Grand Budapest Hotel poster" width="218"
            height="327"/>
        </div>
      </div>

      <div className="add-review">
        <Review/>
      </div>

    </section>
  );
};

ReviewForMovie.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  onLogoLinkClick: PropTypes.func.isRequired
};

export default ReviewForMovie;
