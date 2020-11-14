import React from "react";
import renderer from "react-test-renderer";
import MoreLikeThisFilm from "./more-like-this-film";
import films from "../../mocks/films";
import {MemoryRouter} from 'react-router-dom';

const noop = () => {};

describe(`Should MoreLikeThisFilm render correctly`, () => {
  it(`With no filmActive`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <MoreLikeThisFilm
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

  it(`With filmActive`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <MoreLikeThisFilm
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
