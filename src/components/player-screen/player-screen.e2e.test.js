import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Player from "./player-screen";

const noop = () => {
};
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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should full screen button be pressed`, () => {
  const handleClickFullScreen = jest.fn();

  const wrapper = shallow(
      <Player
        playFilm={true}
        film={films[1]}
        progressVideo={1}
        timeLeftFilm={1}
        handleClickFullScreen={handleClickFullScreen}
        handlePlayFilm={noop}
        handlePauseFilm={noop}
      />
  );

  const fullScreenButton = wrapper.find(`button.player__full-screen`);
  fullScreenButton.simulate(`click`);
  expect(handleClickFullScreen).toHaveBeenCalledTimes(1);
});

it(`Should pause film button be pressed`, () => {
  const handlePauseFilm = jest.fn();

  const wrapper = shallow(
      <Player
        playFilm={true}
        film={films[1]}
        progressVideo={1}
        timeLeftFilm={1}
        handleClickFullScreen={noop}
        handlePlayFilm={noop}
        handlePauseFilm={handlePauseFilm}
      />
  );

  const pauseFilmButton = wrapper.find(`button.player__play`);
  pauseFilmButton.simulate(`click`);
  expect(handlePauseFilm).toHaveBeenCalledTimes(1);
});

it(`Should play film button be pressed`, () => {
  const handlePlayFilm = jest.fn();

  const wrapper = shallow(
      <Player
        playFilm={false}
        film={films[1]}
        progressVideo={1}
        timeLeftFilm={1}
        handleClickFullScreen={noop}
        handlePlayFilm={handlePlayFilm}
        handlePauseFilm={noop}
      />
  );

  const playFilmButton = wrapper.find(`button.player__play`);
  playFilmButton.simulate(`click`);
  expect(handlePlayFilm).toHaveBeenCalledTimes(1);
});


