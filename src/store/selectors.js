import {createSelector} from "reselect";
import constant from "../const";
import films from "../mocks/films";

const {ALL_GENRE} = constant;

const genreSelector = (state) => state.activeGenre;
const filmsSelector = (state) => state.films;

export const getFilmsByGenre = createSelector([genreSelector], (genre) => {
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

