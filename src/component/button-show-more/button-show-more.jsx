import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import constant from "../../const";
const {BASE_NUMBER_OF_CARDS} = constant;

const ButtonShowMore = (props) => {
  const {cardsOfShownFilms, changeNumberShownCards} = props;

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
  cardsOfShownFilms: PropTypes.number.isRequired,
  changeNumberShownCards: PropTypes.func.isRequired,
};

const mapStateToProps = ({FILM}) => ({
  cardsOfShownFilms: FILM.cardsOfShownFilms
});

const mapDispatchToProps = (dispatch) => ({
  changeNumberShownCards(cardsOfShownFilms) {
    dispatch(ActionCreator.changeNumberShownCards(cardsOfShownFilms + BASE_NUMBER_OF_CARDS));
  }
});

export {ButtonShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonShowMore);
