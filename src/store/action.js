export const ActionType = {
  CHANGE_FILTER_GENRE_FILMS: `CHANGE_FILTER_GENRE_FILMS`,
  CREAT_LIST_FILMS_OF_GENRE: `GET_LIST_FILMS_OF_GENRE`,
  CHANGE_NUMBER_SHOWN_FILMS: `CHANGE_NUMBER_SHOWN_FILMS`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_COMMENTS_OF_FILM: `LOAD_COMMENTS_OF_FILM`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  UPDATE_DATA_FILM: `UPDATE_DATA_FILM`,
  LOAD_USER_DATA: `LOAD_USER_DATA`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  UPDATE_DATA_PROMO_FILM: `UPDATE_DATA_PROMO_FILM`,
  WRITE_ERROR: `WRITE_ERROR`
};

export const ActionCreator = {
  updateDataFilm: (film) => ({
    type: ActionType.UPDATE_DATA_FILM,
    payload: film
  }),
  updateDataPromoFilm: (film) => ({
    type: ActionType.UPDATE_DATA_PROMO_FILM,
    payload: film
  }),
  changeActiveFilter: (filter) => ({
    type: ActionType.CHANGE_FILTER_GENRE_FILMS,
    payload: filter
  }),
  changeNumberShownCards: (numberShownFilms) => ({
    type: ActionType.CHANGE_NUMBER_SHOWN_FILMS,
    payload: numberShownFilms
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  loadCommentsFilm: (comments) => ({
    type: ActionType.LOAD_COMMENTS_OF_FILM,
    payload: comments,
  }),
  loadUserData: (personalInfo) => ({
    type: ActionType.LOAD_USER_DATA,
    payload: personalInfo,
  }),
  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: film,
  }),
  writeError: (error) => ({
    type: ActionType.WRITE_ERROR,
    payload: error,
  }),
};


