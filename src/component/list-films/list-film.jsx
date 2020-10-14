import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import propsForFilms from "../../mocks/prop-types-for-films";

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
            // clearTimeout(timerId);
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
