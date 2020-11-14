import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withPlayerScreen from "./with-player-screen";
import films from "../../mocks/films";
import PropTypes from "prop-types";

configure({adapter: new Adapter()});

const match = {params: {id: `4`}};
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
