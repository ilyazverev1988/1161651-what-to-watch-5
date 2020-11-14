import React from "react";
import renderer from "react-test-renderer";
import Player from "./player-screen";
import films from "../../mocks/films";
const noop = () => {};

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
