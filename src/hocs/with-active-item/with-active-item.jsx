import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/prop-types-for-films";

const withActiveItem = (Component)=>{
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {filmActive: ``};
      this._handleClickFilm = this._handleClickFilm.bind(this);
    }

    _handleClickFilm(film) {
      this.setState({filmActive: `test`});
    }

    render() {
      const {filmActive} = this.state;
      const {films, onFilmCardClick} = this.props;
      return (
        <Component {...this.props} filmActive={filmActive} films={films} onFilmCardClick={onFilmCardClick} handleClickFilm={this._handleClickFilm}/>
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
