import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withPlayerScreen from "./with-player-screen";
import films from "../../mocks/films";

configure({adapter: new Adapter()});

const match = {params: {id: `4`}};
const MockComponent = () => <div/>;
const MockComponentWrapped = withPlayerScreen(MockComponent);

it(`Should change state depending on play film`, () => {
  const wrapper = mount(
      <MockComponentWrapped
        films={films}
        match={match}
      />
  );

  expect(wrapper.state().playFilm).toEqual(false);
});
