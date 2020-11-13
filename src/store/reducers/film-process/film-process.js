import {extend} from "../../../utils";
import {ActionType} from "../../action";
import constant from "../../../const";
const {ALL_GENRE, BASE_NUMBER_OF_CARDS} = constant;

const initialState = {
  activeGenre: ALL_GENRE,
  cardsOfShownFilms: BASE_NUMBER_OF_CARDS
};

const filmProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_GENRE_FILMS:
      return extend(state, {
        activeGenre: action.payload,
        cardsOfShownFilms: BASE_NUMBER_OF_CARDS
      });
    case ActionType.CHANGE_NUMBER_SHOWN_FILMS:
      return extend(state, {
        cardsOfShownFilms: action.payload
      });
  }
  return state;
};

export {filmProcess};
