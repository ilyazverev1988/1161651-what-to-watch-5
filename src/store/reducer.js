import {extend, getUniqueGenresFilms, getFilmsByGenre} from "../utils";
import {ActionType} from "./action";
import films from "../mocks/films";
import {ALL_GENRE} from "../const";

const initialState = {
  activeGenre: ALL_GENRE,
  genresOfFilm: getUniqueGenresFilms(films),
  listOfCardsFilm: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_GENRE_FILMS:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.GET_LIST_FILMS_OF_GENRE:
      return extend(state, {
        listOfCardsFilm: getFilmsByGenre(films, action.payload),
      });
  }

  return state;
};

export {reducer};
