import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MyList from "./my-list-screen";
import films from "../../mocks/films";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import configureMockStore from "redux-mock-store";

Enzyme.configure({
  adapter: new Adapter(),
});
const mockStore = configureMockStore();
const store = mockStore({
  USER: {
    userData: {
      id: 1,
      email: `3@mail.ru`,
      name: `3`,
      avatarURL: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/10.jpg`,
      errorAuthorization: ``
    },
    authorizationStatus: `AUTH`
  }
});
const noop = () => {};

it(`Should mouseover the pointer over the movie card in myList`, () => {
  const handleMouseEnterFilm = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <Router>
          <MyList
            films={films}
            handleMouseEnterFilm={handleMouseEnterFilm}
            handleMouseOverFilm={noop}
            filmActive={0}>
          </MyList>
        </Router>
      </Provider>
  );

  const smallMovieCard = wrapper.find(`div.small-movie-card__image`).at(0);
  smallMovieCard.simulate(`mouseover`);
  expect(handleMouseEnterFilm).toHaveBeenCalledTimes(1);
});

it(`Should mouseout the pointer over the movie card in myList`, () => {
  const handleMouseOverFilm = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <Router>
          <MyList
            films={films}
            handleMouseEnterFilm={noop}
            handleMouseOverFilm={handleMouseOverFilm}
            filmActive={0}>
          </MyList>
        </Router>
      </Provider>
  );

  const smallMovieCard = wrapper.find(`div.small-movie-card__image`).at(0);
  smallMovieCard.simulate(`mouseout`);
  expect(handleMouseOverFilm).toHaveBeenCalledTimes(1);
});
