import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {getFilmsByGenre} from "../../utils";
import films from "../../mocks/films";

const ListOfGenres = (props) => {
  const {genres, changeActiveFilter, activeGenre, changeFilmCards} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => <li key={`genre-${i}`} onClick={(evt)=>{
        evt.preventDefault();
        changeActiveFilter(genre);
        changeFilmCards(films, genre);
      }
      } className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>)}
    </ul>
  );
};

ListOfGenres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  changeActiveFilter: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  changeFilmCards: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  genres: state.genresOfFilm,
  activeGenre: state.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveFilter(filter) {
    dispatch(ActionCreator.changeActiveFilter(filter));
  },
  changeFilmCards(filmsForSort, filter) {
    let filmsSortGenre = getFilmsByGenre(filmsForSort, filter);
    dispatch(ActionCreator.changeFilmCards(filmsSortGenre));
  },
});

export {ListOfGenres};
export default connect(mapStateToProps, mapDispatchToProps)(ListOfGenres);
