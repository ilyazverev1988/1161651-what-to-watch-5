import React from "react";
import Mainscreen from "../main-screen/main-screen";
import PropTypes from "prop-types";

const App = (props) => {

  const {movieTitle, movieGenre, movieYear} = props;

  return (
    <Mainscreen movieTitle={movieTitle} movieGenre={movieGenre} movieYear={movieYear}/>
  );
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.string.isRequired
};

export default App;
