import {ActionCreator} from "../action";
import {adaptFilmToClient} from "../../utils";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data})=>dispatch(ActionCreator.loadFilms(data.map(adaptFilmToClient))))
);
