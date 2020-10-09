import PropTypes from "prop-types";

const propsForReviews = PropTypes.arrayOf(PropTypes.shape({
  film: PropTypes.string.isRequired,
  review: PropTypes.arrayOf(PropTypes.shape({
    textReview: PropTypes.string.isRequired,
    filmScore: PropTypes.string.isRequired,
    nameUser: PropTypes.string.isRequired,
    dateReview: PropTypes.string.isRequired
  }).isRequired).isRequired
}).isRequired).isRequired;

export default propsForReviews;
