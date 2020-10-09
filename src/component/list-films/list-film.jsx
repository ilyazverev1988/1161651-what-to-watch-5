import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import propsForFilms from "../../mocks/prop-types-for-films";

class ListFilm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {filmActive: ``};
  }

  render() {
    const {films, onFilmCardClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map((film) => <SmallMovieCard key={film.nameFilm} film={film} onFilmCardClick={onFilmCardClick} onMouseEnterCard={()=>{
          this.setState({filmActive: film.nameFilm});
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
