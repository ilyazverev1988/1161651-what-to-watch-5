import {createSelector} from "reselect";
import constant from "../const";
import films from "../mocks/films";

const {ALL_GENRE} = constant;

const genreSelector = (state) => state.activeGenre;

export const getFilmsByGenre = createSelector([genreSelector], (genre) => {
  if (genre === ALL_GENRE) {
    return films;
  } else {
    return films.filter((film) => film.genre === genre);
  }
}
);


