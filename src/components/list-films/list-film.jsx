import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import propsForFilms from "../../prop-types/prop-types-for-films";

const ListFilm = (props) => {
  const {filmActive, films, handleMouseEnterFilm, handleMouseOverFilm} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <SmallMovieCard key={film.nameFilm} isActive={filmActive === film.id} film={film}
        onMouseEnterCard={()=>{
          handleMouseEnterFilm(film);
        }} onMouseOverCard={handleMouseOverFilm}/>)}
    </div>
  );
};

ListFilm.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  filmActive: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleMouseEnterFilm: PropTypes.func.isRequired,
  handleMouseOverFilm: PropTypes.func.isRequired
};

export default ListFilm;

