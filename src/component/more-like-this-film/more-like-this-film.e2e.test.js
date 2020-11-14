import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoreLikeThisFilm from "./more-like-this-film";
import films from "../../mocks/films";
import {BrowserRouter as Router} from 'react-router-dom';

Enzyme.configure({
  adapter: new Adapter(),
});

const noop = () => {};

it(`Should mouseover the pointer over the movie card in moreLikeThisFilm`, () => {
  const handleMouseEnterFilm = jest.fn();

  const wrapper = mount(
      <Router>
        <MoreLikeThisFilm
          films={films}
          handleMouseEnterFilm={handleMouseEnterFilm}
          handleMouseOverFilm={noop}
          filmActive={0}>
        </MoreLikeThisFilm>
      </Router>
  );

  const smallMovieCard = wrapper.find(`div.small-movie-card__image`).at(0);
  smallMovieCard.simulate(`mouseover`);
  expect(handleMouseEnterFilm).toHaveBeenCalledTimes(1);
});

it(`Should mouseout the pointer over the movie card in moreLikeThisFilm`, () => {
  const handleMouseOverFilm = jest.fn();

  const wrapper = mount(
      <Router>
        <MoreLikeThisFilm
          films={films}
          handleMouseEnterFilm={noop}
          handleMouseOverFilm={handleMouseOverFilm}
          filmActive={1}>
        </MoreLikeThisFilm>
      </Router>
  );

  const smallMovieCard = wrapper.find(`div.small-movie-card__image`).at(1);
  smallMovieCard.simulate(`mouseout`);
  expect(handleMouseOverFilm).toHaveBeenCalledTimes(1);
});
