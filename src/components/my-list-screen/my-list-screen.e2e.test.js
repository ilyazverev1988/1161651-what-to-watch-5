import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MyList from "./my-list-screen";
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
const films = [
  {
    id: 1,
    backgroundColor: `#73B39A`,
    preview: `img/aviator.jpg`,
    nameFilm: `Aviator1`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    filmCover: `img/bg-the-grand-budapest-hotel.jpg`,
    genre: `Thrillers`,
    releaseYear: 2014,
    descriptionFilm: `Friendship, metamorphosis, and adventure.`,
    commonScore: 8.9,
    numberOfVotes: 3,
    cast: [`Bill Murray`, `Jude Law`],
    producer: `Wes Andreson`,
    isFavorite: true,
    duration: 92,
    linkPreviewVideo: `https://cdn.videvo.net/videvo_files/converted/2018_07/preview/180607_A_064.mp429860.webm`,
    linkFullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1f/Fai_Ming_Estate_roadblock_20200126.webm/Fai_Ming_Estate_roadblock_20200126.webm.360p.vp9.webm`
  },
  {
    id: 2,
    backgroundColor: `#73B39A`,
    preview: `img/aviator.jpg`,
    nameFilm: `Aviator2`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    filmCover: `img/bg-the-grand-budapest-hotel.jpg`,
    genre: `Thrillers`,
    releaseYear: 2014,
    descriptionFilm: `Friendship, metamorphosis, and adventure.`,
    commonScore: 8.9,
    numberOfVotes: 3,
    cast: [`Bill Murray`, `Jude Law`],
    producer: `Wes Andreson`,
    isFavorite: false,
    duration: 92,
    linkPreviewVideo: `https://cdn.videvo.net/videvo_files/converted/2018_07/preview/180607_A_064.mp429860.webm`,
    linkFullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1f/Fai_Ming_Estate_roadblock_20200126.webm/Fai_Ming_Estate_roadblock_20200126.webm.360p.vp9.webm`
  }
];

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
