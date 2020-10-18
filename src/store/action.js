export const ActionType = {
  CHANGE_FILTER_GENRE_FILMS: `CHANGE_FILTER_GENRE_FILMS`,
  CREAT_LIST_FILMS_OF_GENRE: `GET_LIST_FILMS_OF_GENRE`,
  CHANGE_NUMBER_SHOWN_FILMS: `CHANGE_NUMBER_SHOWN_FILMS`
};

export const ActionCreator = {
  changeActiveFilter: (filter) => ({
    type: ActionType.CHANGE_FILTER_GENRE_FILMS,
    payload: filter
  }),

  changeFilmCards: (films) => ({
    type: ActionType.CREAT_LIST_FILMS_OF_GENRE,
    payload: films
  }),

  changeNumberShownCards: (numberShownFilms) => ({
    type: ActionType.CHANGE_NUMBER_SHOWN_FILMS,
    payload: numberShownFilms
  }),
};
