import React from "react";
import ReactDom from "react-dom";
import App from "./component/app/app";
import films from "./mocks/films";
import reviews from "./mocks/reviews";

ReactDom.render(
    <App films={films} reviews={reviews}/>,
    document.querySelector(`#root`)
);
