import {ALL_GENRE} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getUniqueGenresFilms = (films) => {
  let allGenres = [ALL_GENRE];
  for (let film of films) {
    allGenres.push((film.genre));
  }
  return Array.from(new Set(allGenres.slice(0, 10)));
};

export const getFilmsByGenre = (filmsForFilter, genre) => {
  if (genre === ALL_GENRE) {
    return filmsForFilter;
  } else {
    return filmsForFilter.filter((film) => film.genre === genre);
  }
};

