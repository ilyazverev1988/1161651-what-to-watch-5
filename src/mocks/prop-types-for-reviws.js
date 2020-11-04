import PropTypes from "prop-types";

const propsForReviews = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired
}).isRequired).isRequired;

export default propsForReviews;
