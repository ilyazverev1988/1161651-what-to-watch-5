import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item";

configure({adapter: new Adapter()});
const film = {
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
const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should change state depending of mouseover and mouseout on the film card`, () => {
  const wrapper = shallow(
      <MockComponentWrapped/>
  );

  expect(wrapper.state().filmActive).toEqual(``);

  wrapper.instance()._handleMouseEnterFilm(film);
  setTimeout(() => {
    expect(wrapper.state().filmActive).toEqual(1);
  });

  wrapper.instance()._handleMouseOverFilm(film);
  expect(wrapper.state().filmActive).toEqual(``);
});
