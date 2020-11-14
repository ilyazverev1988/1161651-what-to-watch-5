import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";
import films from "../../mocks/films";
import {MemoryRouter} from "react-router-dom";

const noop = () => {};

describe(`Should SmallMovieCard render correctly`, () => {
  it(`With active film`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <SmallMovieCard
              isActive={true}
              film={films[1]}
              onMouseOverCard={noop}
              onMouseEnterCard={noop}
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

  it(`No Active film`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <SmallMovieCard
              isActive={false}
              film={films[1]}
              onMouseOverCard={noop}
              onMouseEnterCard={noop}
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
