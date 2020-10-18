export const ActionType = {
  CHANGE_FILTER_GENRE_FILMS: `CHANGE_FILTER_GENRE_FILMS`,
  GET_LIST_FILMS_OF_GENRE: `GET_LIST_FILMS_OF_GENRE`
};

export const ActionCreator = {
  changeActiveFilter: (filter) => ({
    type: ActionType.CHANGE_FILTER_GENRE_FILMS,
    payload: filter
  }),

  changeFilmCards: (filter) => ({
    type: ActionType.GET_LIST_FILMS_OF_GENRE,
    payload: filter
  }),
};
