export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const returnElapsedTime = (elapsedTimeFilm) => {
  const addZeroForTime = (period) => {
    return (period < 10) ? `0` + period : period;
  };
  let hours = addZeroForTime(Math.floor(elapsedTimeFilm / 3600));
  let minutes = addZeroForTime(Math.floor((elapsedTimeFilm - (hours * 3600)) / 60));
  let seconds = addZeroForTime(Math.round(elapsedTimeFilm - (hours * 3600) - (minutes * 60)));
  return `${hours}:${minutes}:${seconds}`;
};

export const returnTimeForComment = (time) => {
  let months = [`January`, `February`, `March`, `April`, `May`, `June`,
    `July`, `August`, `September`, `October`, `November`, `December`];
  let dateComment = Date.parse(time);
  return `${months[new Date(dateComment).getMonth()]} ${new Date(dateComment).getDate()}, ${new Date(dateComment).getFullYear()}`;
};

export const returnStarringOfFilms = (actors) => {
  return actors.join(`, `) + ` and other`;
};

export const returnTestStarringOfFilms = (actors) => {
  return actors.join(`\n`);
};

export const returnFilmTime = (timeFilm)=> {
  const addZeroForTime = (period) => {
    return (period < 10) ? `0` + period : period;
  };
  let hours = (Math.floor(timeFilm / 60));
  let minutes = addZeroForTime(Math.floor((timeFilm - (hours * 60))));
  return `${hours}h ${minutes}m`;
};

export const adaptFilmToClient = (film) => {
  const adaptedFilm = {
    backgroundColor: film.background_color,
    id: film.id,
    preview: film.preview_image,
    nameFilm: film.name,
    poster: film.poster_image,
    filmCover: film.background_image,
    genre: film.genre,
    releaseYear: film.released,
    descriptionFilm: film.description,
    commonScore: film.rating,
    numberOfVotes: film.scores_count,
    cast: film.starring,
    producer: film.director,
    isFavorite: film.is_favorite,
    duration: film.run_time,
    linkPreviewVideo: film.preview_video_link,
    linkFullVideo: film.video_link
  };

  return adaptedFilm;
};
