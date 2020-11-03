import {ActionCreator} from "./action";
import {adaptFilmToClient} from "../utils";
import {AuthorizationStatus} from "../const";

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
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
      dispatch(ActionCreator.redirectToRoute(`/`));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);
