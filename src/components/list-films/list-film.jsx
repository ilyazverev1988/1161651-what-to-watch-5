import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import propsForFilms from "../../prop-types/prop-types-for-films";

const ListFilm = (props) => {
  const [internalState, setInternalState] = useState({
    filmActive: ``,
  });
  let {filmActive} = internalState;
  let {films} = props;
  let timerId;
  useEffect(()=>{
    return () => {
      clearTimeout(timerId);
      setInternalState(
          Object.assign(
              {}, internalState, {
                filmActive: ``
              }));
    };
  }, []);

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <SmallMovieCard key={film.nameFilm} isActive={filmActive === film.id} film={film}
        onMouseEnterCard={()=>{
          timerId = setTimeout(() =>
            setInternalState(
                Object.assign(
                    {}, internalState, {
                      filmActive: film.id
                    })), 1000);
        }} onMouseOverCard={()=>{
          clearTimeout(timerId);
          setInternalState(
              Object.assign(
                  {}, internalState, {
                    filmActive: ``
                  }));
        }}/>)}
    </div>
  );
};

ListFilm.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  filmActive: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ListFilm;

