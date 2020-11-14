import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ListFilm from "./list-film";
import films from "../../mocks/films";
import {BrowserRouter as Router} from 'react-router-dom';

Enzyme.configure({
  adapter: new Adapter(),
});

const noop = () => {};

it(`Should hover the pointer over the movie card in listFilm`, () => {
  const handleMouseEnterFilm = jest.fn();

  const wrapper = mount(
      <Router>
        <ListFilm
          films={films}
          handleMouseEnterFilm={handleMouseEnterFilm}
          handleMouseOverFilm={noop}
          filmActive={1}>
        </ListFilm>
      </Router>
  );

  const smallMovieCard = wrapper.find(`div.small-movie-card__image`).at(1);
  smallMovieCard.simulate(`mouseover`);
  expect(handleMouseEnterFilm).toHaveBeenCalledTimes(1);
});

it(`Should mouseout the pointer over the movie card in listFilm`, () => {
  const handleMouseOverFilm = jest.fn();

  const wrapper = mount(
      <Router>
        <ListFilm
          films={films}
          handleMouseEnterFilm={noop}
          handleMouseOverFilm={handleMouseOverFilm}
          filmActive={1}>
        </ListFilm>
      </Router>
  );

  const smallMovieCard = wrapper.find(`div.small-movie-card__image`).at(1);
  smallMovieCard.simulate(`mouseout`);
  expect(handleMouseOverFilm).toHaveBeenCalledTimes(1);
});
