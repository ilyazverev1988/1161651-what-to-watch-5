import {createSelector} from "reselect";
import constant from "../const";
const {ALL_GENRE} = constant;
const genreSelector = (state) => state.FILM.activeGenre;
const filmsSelector = (state) => state.DATA.films;

export const getFilmsByGenre = createSelector([genreSelector, filmsSelector], (genre, films) => {
  if (genre === ALL_GENRE) {
    return films;
  } else {
    return films.filter((film) => film.genre === genre);
  }
}
);

export const getUniqueGenresFilms = createSelector([filmsSelector], (filmsForGenres) => {
  let allGenres = [ALL_GENRE];
  for (let film of filmsForGenres) {
    allGenres.push((film.genre));
  }
  return Array.from(new Set(allGenres.slice(0, 10)));
});


