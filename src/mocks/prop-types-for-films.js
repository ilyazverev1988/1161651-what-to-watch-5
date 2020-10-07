import PropTypes from "prop-types";

const propsForFilms = PropTypes.shape({
  preview: PropTypes.string.isRequired,
  nameFilm: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  filmCover: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  descriptionFilm: PropTypes.string.isRequired,
  commonScore: PropTypes.number.isRequired,
  numberOfVotes: PropTypes.number.isRequired,
  cast: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  linkPreviewVideo: PropTypes.string.isRequired,
  linkFullVideo: PropTypes.string.isRequired,
}).isRequired;

export default propsForFilms;
