import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/prop-types-for-films";

const withActiveItem = (Component)=>{
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        filmActive: ``,
        timerId: null
      };

      this._handleMouseEnterFilm = this._handleMouseEnterFilm.bind(this);
      this._handleMouseOverFilm = this._handleMouseOverFilm.bind(this);
    }

    _handleMouseEnterFilm(film) {
      const timerId = setTimeout(() => this.setState({filmActive: film.nameFilm}), 1000);
      this.setState({timerId});
    }

    _handleMouseOverFilm() {
      this.setState({filmActive: ``});
      clearTimeout(this.state.timerId);
    }

    render() {
      const {filmActive} = this.state;
      const {films, onFilmCardClick} = this.props;
      return (
        <Component {...this.props} filmActive={filmActive} films={films} onFilmCardClick={onFilmCardClick} handleMouseEnterFilm={this._handleMouseEnterFilm} handleMouseOverFilm={this._handleMouseOverFilm}/>
      );
    }
  }
  WithActiveItem.propTypes = {
    films: PropTypes.arrayOf(propsForFilms).isRequired,
    onFilmCardClick: PropTypes.func.isRequired
  };

  return WithActiveItem;

};

export default withActiveItem;
