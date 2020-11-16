import React from "react";
import renderer from "react-test-renderer";
import TabsForMoviePageScreen from "./tabs-for-movie-page-screen";

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

describe(`Should TabsForMoviePageScreen render correctly`, () => {
  it(`With active Details`, () => {
    const tree = renderer
      .create(
          <TabsForMoviePageScreen
            film={films[1]}
            reviews={reviews}
            handleClickOverview={noop}
            handleClickDetails={noop}
            handleClickReviews={noop}
            Details={true}
            Overview={false}
            Reviews={false}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`With active Overview`, () => {
    const tree = renderer
      .create(
          <TabsForMoviePageScreen
            film={films[1]}
            reviews={reviews}
            handleClickOverview={noop}
            handleClickDetails={noop}
            handleClickReviews={noop}
            Details={false}
            Overview={true}
            Reviews={false}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`With active Reviews`, () => {
    const tree = renderer
      .create(
          <TabsForMoviePageScreen
            film={films[1]}
            reviews={reviews}
            handleClickOverview={noop}
            handleClickDetails={noop}
            handleClickReviews={noop}
            Details={false}
            Overview={false}
            Reviews={true}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
