import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/prop-types-for-films";

const withActiveItem = (Component)=>{
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        filmActive: ``,
      };

      this._handleMouseEnterFilm = this._handleMouseEnterFilm.bind(this);
      this._handleMouseOverFilm = this._handleMouseOverFilm.bind(this);
    }

    _handleMouseEnterFilm(film) {
      this.timerId = setTimeout(() => this.setState({filmActive: film.id}), 1000);
    }

    _handleMouseOverFilm() {
      this.setState({filmActive: ``});
      clearTimeout(this.timerId);
    }

    componentWillUnmount() {
      this.setState({filmActive: ``});
      clearTimeout(this.timerId);
    }

    render() {
      const {filmActive} = this.state;
      const {films} = this.props;
      return (
        <Component {...this.props} filmActive={filmActive} films={films} handleMouseEnterFilm={this._handleMouseEnterFilm} handleMouseOverFilm={this._handleMouseOverFilm}/>
      );
    }
  }
  WithActiveItem.propTypes = {
    films: PropTypes.arrayOf(propsForFilms).isRequired,
  };

  return WithActiveItem;

};

export default withActiveItem;
