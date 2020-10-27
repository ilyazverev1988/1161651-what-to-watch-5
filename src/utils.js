import constant from "./const";
const {ALL_GENRE} = constant;

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
/*
export const getFilmsByGenre = (filmsForFilter, genre) => {
  if (genre === ALL_GENRE) {
    return filmsForFilter;
  } else {
    return filmsForFilter.filter((film) => film.genre === genre);
  }
};
*/
export const returnElapsedTime = (elapsedTimeFilm) => {
  const addZeroForTime = (period) => {
    return (period < 10) ? `0` + period : period;
  };
  let hours = addZeroForTime(Math.floor(elapsedTimeFilm / 3600));
  let minutes = addZeroForTime(Math.floor((elapsedTimeFilm - (hours * 3600)) / 60));
  let seconds = addZeroForTime(Math.round(elapsedTimeFilm - (hours * 3600) - (minutes * 60)));
  return `${hours}:${minutes}:${seconds}`;
};
