import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import propsForFilms from "../../prop-types/prop-types-for-films";

const MoreLikeThisFilm = (props) =>{
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

  const myFilm = films.slice(0, 4);
  return (
    <div className="catalog__movies-list">
      {myFilm.map((film) => <SmallMovieCard isActive={filmActive === film.id}
        key={film.nameFilm} film={film} onMouseEnterCard={()=>{
          timerId = setTimeout(() =>
            setInternalState(
                Object.assign(
                    {}, internalState, {
                      filmActive: film.id
                    })), 1000);
        }}
        onMouseOverCard={()=>{
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

MoreLikeThisFilm.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  filmActive: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MoreLikeThisFilm;
