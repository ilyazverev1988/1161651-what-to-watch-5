import React from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../prop-types/prop-types-for-films";
import ReviewForm from "../review-form/review-form";
import withReviewForm from "../../hocs/with-review-form/with-review-form";
import {Link} from "react-router-dom";
import {returnFilmForID} from "../../utils";
import Avatar from "../avatar/avatar";

const Review = withReviewForm(ReviewForm);

const ReviewForMovie = (props) => {
  const {films} = props;
  const id = props.match.params.id;
  const {poster, nameFilm, filmCover} = returnFilmForID(id, films);
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={filmCover} alt={nameFilm}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={`/`} href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${props.match.params.id}`} href="movie-page.html" className="breadcrumbs__link">{nameFilm}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <Avatar/>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={nameFilm} width="218"
            height="327"/>
        </div>
      </div>

      <div className="add-review">
        <Review id={props.match.params.id}/>
      </div>

    </section>
  );
};

ReviewForMovie.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
};

export default ReviewForMovie;
