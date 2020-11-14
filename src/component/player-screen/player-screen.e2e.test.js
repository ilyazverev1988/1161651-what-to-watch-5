import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Player from "./player-screen";
import films from "../../mocks/films";

const noop = () => {
};

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


