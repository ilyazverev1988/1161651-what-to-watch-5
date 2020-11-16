import React from "react";
import renderer from "react-test-renderer";
import {ButtonShowMore} from "./button-show-more";
import {MemoryRouter} from "react-router-dom";
const noop = () => {};

it(`Should ButtonShowMore render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <ButtonShowMore
            cardsOfShownFilms={8}
            changeNumberShownCards={noop}
          />
        </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
