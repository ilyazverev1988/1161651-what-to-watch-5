import React from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/prop-types-for-films";
import VideoPlayer from "../video-player/video-player";

const SmallMovieCard = (props) => {

  const {film, onMouseEnterCard, onMouseOverCard, onFilmCardClick, isActive} = props;

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
        <VideoPlayer isActive={isActive} volume={true} isPlaying={false} nameFilm={film.nameFilm}
          linkPreviewVideo={film.linkPreviewVideo} preview={film.preview}/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.nameFilm}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  isActive: PropTypes.bool.isRequired,
  filmActive: PropTypes.number,
  onFilmCardClick: PropTypes.func.isRequired,
  onMouseEnterCard: PropTypes.func,
  onMouseOverCard: PropTypes.func,
  film: propsForFilms
};

export default React.memo(SmallMovieCard);
