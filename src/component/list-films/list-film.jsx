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
/*
class ListFilm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filmActive: ``,
      timerId: null
    };
  }

  render() {
    const {films, onFilmCardClick} = this.props;
    const {filmActive} = this.state;
    return (
      <div className="catalog__movies-list">
        {films.map((film) => <SmallMovieCard key={film.nameFilm} filmActive={filmActive} film={film}
          onFilmCardClick={onFilmCardClick} onMouseEnterCard={() => {
            const timerId = setTimeout(() => this.setState({filmActive: film.nameFilm}), 1000);
            this.setState({
              timerId
            });
          }}
          onMouseOverCard={() => {
            this.setState({filmActive: ``});
            clearTimeout(this.state.timerId);
          }}/>)}
      </div>
    );
  }
}

ListFilm.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

export default ListFilm;
*/
