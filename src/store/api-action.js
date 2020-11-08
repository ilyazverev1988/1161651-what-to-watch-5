import {ActionCreator} from "./action";
import {adaptFilmToClient} from "../utils";
import {AuthorizationStatus} from "../const";
import {returnValueIsFavorite} from "../utils";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data})=>dispatch(ActionCreator.loadFilms(data.map(adaptFilmToClient))))
);

export const fetchCommetsFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data})=>dispatch(ActionCreator.loadCommentsFilm(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((user) => dispatch(ActionCreator.loadUserData(user.data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((user) => {
      dispatch(ActionCreator.loadUserData(user.data));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.redirectToRoute(`/`));
    })
    .catch(()=>dispatch(ActionCreator.writeError(`We can’t recognize this email and password combination. Please try again.`)))
);

export const addFilmToFavorite = (id, isFavorite) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${returnValueIsFavorite(isFavorite)}`)
    .then((film) => dispatch(ActionCreator.updateDataFilm(adaptFilmToClient(film.data))))
    .catch(()=>dispatch(ActionCreator.redirectToRoute(`/login`)))
);

export const addPromoToFavorite = (id, isFavorite) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${returnValueIsFavorite(isFavorite)}`)
    .then((film) => {
      dispatch(ActionCreator.updateDataPromoFilm(adaptFilmToClient(film.data)));
      dispatch(ActionCreator.updateDataFilm(adaptFilmToClient(film.data)));
    }
    ).catch(()=>dispatch(ActionCreator.redirectToRoute(`/login`)))
);


export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then((film)=>dispatch(ActionCreator.loadPromoFilm(adaptFilmToClient(film.data))))
);
