import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import propsForFilms from "../../mocks/prop-types-for-films";
import constant from "../../const";
import {getFilmsByGenre} from "../../store/selectors";
const {BASE_NUMBER_OF_CARDS} = constant;

const ButtonShowMore = (props) => {
  const {listOfCardsFilm, cardsOfShownFilms, changeNumberShownCards} = props;

  return (
    <div className="catalog__more">
      <button onClick={(evt) => {
        evt.preventDefault();
        changeNumberShownCards(cardsOfShownFilms);
      }} className="catalog__button" type="button">Show more
      </button>
    </div>
  );
};

ButtonShowMore.propTypes = {
  //listOfCardsFilm: PropTypes.arrayOf(propsForFilms).isRequired,
  cardsOfShownFilms: PropTypes.number.isRequired,
  changeNumberShownCards: PropTypes.func.isRequired,
};

const mapStateToProps = ({FILM}) => ({
  //listOfCardsFilm: getFilmsByGenre(FILM),
  cardsOfShownFilms: FILM.cardsOfShownFilms
});

const mapDispatchToProps = (dispatch) => ({
  changeNumberShownCards(cardsOfShownFilms) {
    dispatch(ActionCreator.changeNumberShownCards(cardsOfShownFilms + BASE_NUMBER_OF_CARDS));
  }
});

export {ButtonShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonShowMore);
