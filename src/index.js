import React from "react";
import ReactDom from "react-dom";
import App from "./component/app/app";

const Mocks = {
  movieTitle: `The Grand Budapest Hotel`,
  movieGenre: `Drama`,
  movieYear: `2014`
};

ReactDom.render(
    <App movieTitle={Mocks.movieTitle} movieGenre={Mocks.movieGenre} movieYear={Mocks.movieYear}/>,
    document.querySelector(`#root`)
);
