import React from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/prop-types-for-films";
import VideoPlayer from "../video-player/video-player";
import {Link} from "react-router-dom";

const SmallMovieCard = (props) => {

  const {film, onMouseEnterCard, onMouseOverCard, isActive} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <Link to={`/films/${film.id}`}>
        <div className="small-movie-card__image"
          onMouseOver={(evt) => {
            evt.preventDefault();
            onMouseEnterCard(film.nameFilm);
          }}
          onMouseOut={(evt) => {
            evt.preventDefault();
            onMouseOverCard(``);
          }}>
          <VideoPlayer isActive={isActive} volume={true} isPlaying={false} nameFilm={film.nameFilm}
            linkPreviewVideo={film.linkPreviewVideo} preview={film.preview}/>
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${film.id}`} className="small-movie-card__link" href="movie-page.html">{film.nameFilm}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  isActive: PropTypes.bool.isRequired,
  filmActive: PropTypes.number,
  onMouseEnterCard: PropTypes.func,
  onMouseOverCard: PropTypes.func,
  film: propsForFilms
};

export default React.memo(SmallMovieCard);
