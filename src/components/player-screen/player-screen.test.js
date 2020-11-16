import React from "react";
import renderer from "react-test-renderer";
import Player from "./player-screen";

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

describe(`Should Player render correctly`, () => {
  it(`With playFilm=true`, () => {
    const tree = renderer
      .create(
          <Player
            playFilm={true}
            film={films[1]}
            progressVideo={1}
            timeLeftFilm={1}
            handleClickFullScreen={noop}
            handlePlayFilm={noop}
            handlePauseFilm={noop}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`With playFilm=false`, () => {
    const tree = renderer
      .create(
          <Player
            playFilm={false}
            film={films[1]}
            progressVideo={1}
            timeLeftFilm={1}
            handleClickFullScreen={noop}
            handlePlayFilm={noop}
            handlePauseFilm={noop}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
