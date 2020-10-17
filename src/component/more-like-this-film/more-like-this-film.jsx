import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import propsForFilms from "../../mocks/prop-types-for-films";

const MoreLikeThisFilm = (props) => {
  const {films, onFilmCardClick} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <SmallMovieCard key={film.nameFilm} film={film} onMouseOverCard={() => {}} onMouseEnterCard={() => {}} onFilmCardClick={onFilmCardClick}/>)}
    </div>
  );
};

MoreLikeThisFilm.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

export default MoreLikeThisFilm;
