import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import propsForFilms from "../../mocks/prop-types-for-films";

class MoreLikeThisFilm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {filmActive: ``};
  }

  render() {
    const {films, onFilmCardClick} = this.props;
    const myFilm = films.slice(0, 4);
    return (
      <div className="catalog__movies-list">
        {myFilm.map((film) => <SmallMovieCard onFilmCardClick={()=>{
          this.setState({filmActive: film.nameFilm});
          onFilmCardClick();
        }}
        key={film.nameFilm} film={film} onMouseOverCard={()=>{}} onMouseEnterCard={()=>{}}/>)}
      </div>
    );
  }
}

MoreLikeThisFilm.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

export default MoreLikeThisFilm;

