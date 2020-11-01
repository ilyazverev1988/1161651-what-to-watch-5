import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import propsForFilms from "../../mocks/prop-types-for-films";

const ListFilm = (props) => {
  const {filmActive, films, onFilmCardClick, handleMouseEnterFilm, handleMouseOverFilm} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <SmallMovieCard key={film.nameFilm} isActive={filmActive === film.id} film={film}
        onFilmCardClick={onFilmCardClick} onMouseEnterCard={()=>{
          handleMouseEnterFilm(film);
          props.handleMouseEnterFilm(film);
        }} onMouseOverCard={handleMouseOverFilm}/>)}
    </div>
  );
};

ListFilm.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  filmActive: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleMouseEnterFilm: PropTypes.func.isRequired,
  handleMouseOverFilm: PropTypes.func.isRequired
};

export default ListFilm;

