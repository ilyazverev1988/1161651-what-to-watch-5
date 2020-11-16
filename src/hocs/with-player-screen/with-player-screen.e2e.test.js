import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withPlayerScreen from "./with-player-screen";
import PropTypes from "prop-types";

configure({adapter: new Adapter()});

const match = {params: {id: `1`}};
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
const MockComponent = (props) => {
  return (<div>
    {props.children}
  </div>);
};
const MockComponentWrapped = withPlayerScreen(MockComponent);

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

window.HTMLMediaElement.prototype.pause = () => {};
const playStub = jest
  .spyOn(window.HTMLMediaElement.prototype, `play`)
  .mockImplementation(() => {});

it(`Should change state depending on play film`, () => {
  const wrapper = mount(
      <MockComponentWrapped
        films={films}
        match={match}
      />
  );

  expect(playStub).toHaveBeenCalled();
  playStub.mockRestore();

  expect(wrapper.state().playFilm).toEqual(true);
  expect(wrapper.state().progressVideo).toEqual(null);
  expect(wrapper.state().timeLeftFilm).toEqual(null);

  wrapper.instance()._handlePlayFilm();
  expect(wrapper.state().playFilm).toEqual(true);

  wrapper.instance()._handlePauseFilm();
  expect(wrapper.state().playFilm).toEqual(false);
});
