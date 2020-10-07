import React from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/prop-types-for-films";

const SmallMovieCard = (props) => {
  const {film, onMouseEnterCard} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image"
        onMouseOver={(evt) => {
          evt.preventDefault();
          onMouseEnterCard(film.nameFilm);
        }}>
        <img src={film.preview}
          alt={film.nameFilm} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.nameFilm}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  onMouseEnterCard: PropTypes.func.isRequired,
  film: propsForFilms
};

export default SmallMovieCard;
