import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card";
import {BrowserRouter as Router} from "react-router-dom";
import films from "../../mocks/films";

Enzyme.configure({
  adapter: new Adapter(),
});

const noop = () => {};

it(`Should hover the pointer over the movie card`, () => {
  const handleMouseEnterFilm = jest.fn();

  const wrapper = mount(
      <Router>
        <SmallMovieCard
          isActive={false}
          film={films[1]}
          onMouseOverCard={noop}
          onMouseEnterCard={handleMouseEnterFilm}
        />
      </Router>
  );

  const smallMovieCard = wrapper.find(`div.small-movie-card__image`);
  smallMovieCard.simulate(`mouseover`);
  expect(handleMouseEnterFilm).toHaveBeenCalledTimes(1);
});

it(`Should mouseout the pointer over the movie card`, () => {
  const handleMouseOverFilm = jest.fn();

  const wrapper = mount(
      <Router>
        <SmallMovieCard
          isActive={false}
          film={films[1]}
          onMouseEnterCard={noop}
          onMouseOverCard={handleMouseOverFilm}/>
      </Router>
  );

  const smallMovieCard = wrapper.find(`div.small-movie-card__image`);
  smallMovieCard.simulate(`mouseout`);
  expect(handleMouseOverFilm).toHaveBeenCalledTimes(1);
});
