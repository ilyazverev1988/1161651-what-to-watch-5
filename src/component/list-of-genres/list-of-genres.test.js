import React from "react";
import renderer from "react-test-renderer";
import {ListOfGenres} from "./list-of-genres";
import {MemoryRouter} from "react-router-dom";

const genres = [`All genres`, `Action`, `Crime`, `Drama`, `Adventure`, `Comedy`, `Fantasy`];
const activeGenre = `All genres`;
const noop = () => {};

it(`Should ListOfGenres render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <ListOfGenres
            genres={genres}
            activeGenre={activeGenre}
            changeActiveFilter={noop}
          />
        </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
