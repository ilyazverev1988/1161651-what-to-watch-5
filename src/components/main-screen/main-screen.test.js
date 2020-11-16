import React from "react";
import renderer from "react-test-renderer";
import {Mainscreen} from "./main-screen";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";

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
const filmPromo = {
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
};
const cardsOfShownFilms = 8;
const listOfCardsFilm = films;

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
  },
  FILM: {
    activeGenre: `All genres`,
    cardsOfShownFilms: 8
  },
  DATA: {
    films:
      [
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
        },
      ]
  }
});

const storeForSecondTest = mockStore({
  USER: {
    userData: {},
    authorizationStatus: `NO_AUTH`
  },
  FILM: {
    activeGenre: `All genres`,
    cardsOfShownFilms: 8
  },
  DATA: {
    films:
      [
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
        },
      ]
  }
});

describe(`Should Mainscreen render correctly`, () => {
  it(`With Autorization Mainscreen`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Mainscreen
                films={films}
                cardsOfShownFilms={cardsOfShownFilms}
                listOfCardsFilm={listOfCardsFilm}
                filmPromo={filmPromo}
              />
            </MemoryRouter>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Without Autorization Mainscreen`, () => {
    const tree = renderer
      .create(
          <Provider store={storeForSecondTest}>
            <MemoryRouter>
              <Mainscreen
                films={films}
                cardsOfShownFilms={cardsOfShownFilms}
                listOfCardsFilm={listOfCardsFilm}
                filmPromo={filmPromo}
              />
            </MemoryRouter>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
