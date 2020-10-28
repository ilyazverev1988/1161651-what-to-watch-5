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
    runTime: film.run_time,
    //duration: `1h 39m`,
    linkPreviewVideo: film.preview_video_link,
    linkFullVideo: film.video_link
  };

  return adaptedFilm;
};
