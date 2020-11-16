import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import propsForFilms from "../../prop-types/prop-types-for-films";

const MoreLikeThisFilm = (props) =>{
  const {filmActive, films, handleMouseEnterFilm, handleMouseOverFilm} = props;
  const myFilm = films.slice(0, 4);
  return (
    <div className="catalog__movies-list">
      {myFilm.map((film) => <SmallMovieCard isActive={filmActive === film.id}
        key={film.nameFilm} film={film} onMouseEnterCard={()=>{
          handleMouseEnterFilm(film);
        }}
        onMouseOverCard={handleMouseOverFilm}/>)}
    </div>
  );
};

MoreLikeThisFilm.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  filmActive: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleMouseEnterFilm: PropTypes.func.isRequired,
  handleMouseOverFilm: PropTypes.func.isRequired
};

export default MoreLikeThisFilm;
