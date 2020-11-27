import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TabsForMoviePageScreen from "./tabs-for-movie-page-screen";
import {render as renderTest} from '@testing-library/react';

Enzyme.configure({
  adapter: new Adapter(),
});

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
const reviews = [
  {
    id: 1,
    user: {
      id: 4,
      name: `Mollie`,
    },
    rating: 3.2,
    comment: `I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.`,
    date: `2020-10-27T13:38:44.769Z`
  },
  {
    id: 2,
    user: {
      id: 3,
      name: `Kent`,
    },
    rating: 5,
    comment: `I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.`,
    date: `2020-10-27T13:38:44.769Z`
  }
];

it(`Should initial state in tabs`, () => {
  renderTest(<TabsForMoviePageScreen film={films[1]} reviews={reviews}/>);
  expect(document.querySelector(`li:first-child`).classList.contains(`movie-nav__item--active`)).toBe(true);
  expect(document.querySelector(`.movie-rating__score`).textContent).toBe(`8.9`);
  expect(document.querySelector(`.movie-rating__level`).textContent).toBe(`Very good`);
  expect(document.querySelector(`.movie-rating__count`).textContent).toBe(`3 ratings`);
  expect(document.querySelector(`.movie-card__text>p`).textContent).toBe(`Friendship, metamorphosis, and adventure.`);
  expect(document.querySelector(`.movie-card__director`).textContent).toBe(`Director: Wes Andreson`);
  expect(document.querySelector(`.movie-card__starring`).textContent).toBe(`Starring: Bill Murray, Jude Law and other`);
});

