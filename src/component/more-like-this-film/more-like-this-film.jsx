import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import propsForFilms from "../../mocks/prop-types-for-films";

const MoreLikeThisFilm = (props) =>{
  const {filmActive, films, onFilmCardClick, handleMouseEnterFilm, handleMouseOverFilm} = props;
  const myFilm = films.slice(0, 4);
  return (
    <div className="catalog__movies-list">
      {myFilm.map((film) => <SmallMovieCard filmActive={filmActive} onFilmCardClick={onFilmCardClick}
        key={film.nameFilm} film={film} onMouseEnterCard={()=>{
          handleMouseEnterFilm(film);
          props.handleMouseEnterFilm(film);
        }}
        onMouseOverCard={handleMouseOverFilm}/>)}
    </div>
  );
};

MoreLikeThisFilm.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  filmActive: PropTypes.string.isRequired,
  handleMouseEnterFilm: PropTypes.func.isRequired,
  handleMouseOverFilm: PropTypes.func.isRequired
};

export default MoreLikeThisFilm;
