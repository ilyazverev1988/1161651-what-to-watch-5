import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import propsForFilms from "../../mocks/prop-types-for-films";

const ButtonShowMore = (props) => {
  const {listOfCardsFilm, cardsOfShownFilms, changeNumberShownCards} = props;

  return (
    <div className="catalog__more">
      <button onClick={(evt) => {
        evt.preventDefault();
        changeNumberShownCards(listOfCardsFilm, cardsOfShownFilms);
      }} className="catalog__button" type="button">Show more
      </button>
    </div>
  );
};

ButtonShowMore.propTypes = {
  listOfCardsFilm: PropTypes.arrayOf(propsForFilms).isRequired,
  cardsOfShownFilms: PropTypes.arrayOf(propsForFilms).isRequired,
  changeNumberShownCards: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  listOfCardsFilm: state.listOfCardsFilm,
  cardsOfShownFilms: state.cardsOfShownFilms
});

const mapDispatchToProps = (dispatch) => ({
  changeNumberShownCards(listOfCardsFilm, cardsOfShownFilms) {

    dispatch(ActionCreator.changeNumberShownCards(listOfCardsFilm.slice(0, cardsOfShownFilms.length + 8)));
  }
});

export {ButtonShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonShowMore);
