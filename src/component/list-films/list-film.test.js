import React from "react";
import renderer from "react-test-renderer";
import ListFilm from "./list-film";
import films from "../../mocks/films";
import {MemoryRouter} from "react-router-dom";

const noop = () => {};

describe(`Should ListFilm render correctly`, () => {
  it(`With filmActive`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <ListFilm
              filmActive={``}
              films={films}
              handleMouseEnterFilm={noop}
              handleMouseOverFilm={noop}
            />
          </MemoryRouter>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`No filmActive`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <ListFilm
              filmActive={1}
              films={films}
              handleMouseEnterFilm={noop}
              handleMouseOverFilm={noop}
            />
          </MemoryRouter>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

