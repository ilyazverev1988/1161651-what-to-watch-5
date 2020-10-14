import React from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/prop-types-for-films";
import VideoPlayer from "../video-player/video-player";

const SmallMovieCard = (props) => {

  const {film, onMouseEnterCard, onMouseOverCard, onFilmCardClick, filmActive} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image"
        onMouseOver={(evt) => {
          evt.preventDefault();
          onMouseEnterCard(film.nameFilm);
        }}
        onMouseOut={(evt) => {
          evt.preventDefault();
          onMouseOverCard(``);
        }}
        onClick={onFilmCardClick}>
        <VideoPlayer volume={true} filmActive={filmActive} isPlaying={false} nameFilm={film.nameFilm}
          linkPreviewVideo={film.linkPreviewVideo} preview={film.preview}/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.nameFilm}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  filmActive: PropTypes.string.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseOverCard: PropTypes.func.isRequired,
  film: propsForFilms
};

export default SmallMovieCard;
