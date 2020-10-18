import {extend, getUniqueGenresFilms} from "../utils";
import {ActionType} from "./action";
import films from "../mocks/films";
import constant from "../const";
const {ALL_GENRE, BASE_NUMBER_OF_CARDS} = constant;

const initialState = {
  activeGenre: ALL_GENRE,
  genresOfFilm: getUniqueGenresFilms(films),
  listOfCardsFilm: films,
  cardsOfShownFilms: BASE_NUMBER_OF_CARDS
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_GENRE_FILMS:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.CREAT_LIST_FILMS_OF_GENRE:
      return extend(state, {
        listOfCardsFilm: action.payload,
        cardsOfShownFilms: BASE_NUMBER_OF_CARDS
      });

    case ActionType.CHANGE_NUMBER_SHOWN_FILMS:
      return extend(state, {
        cardsOfShownFilms: action.payload
      });
  }

  return state;
};

export {reducer};
