import React from "react";
import renderer from "react-test-renderer";
import {MoviePage} from "./movie-page-screen";
import {MemoryRouter} from "react-router-dom";
import films from "../../mocks/films";
import reviews from "../../mocks/reviews";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const match = {params: {id: `4`}};
const mockStore = configureMockStore();
const store = mockStore({
  USER: {
    userData: {
      id: 1,
      email: `3@mail.ru`,
      name: `3`,
      avatarURL: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/10.jpg`,
      errorAuthorization: ``
    },
    authorizationStatus: `AUTH`
  },
});

const storeForSecondTest = mockStore({
  USER: {
    userData: {},
    authorizationStatus: `NO_AUTH`
  },
});

describe(`Should MoviePage render correctly`, () => {
  it(`With Autorization`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <MoviePage
                films={films}
                reviews={reviews}
                match={match}
              />
            </MemoryRouter>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Without Autorization`, () => {
    const tree = renderer
      .create(
          <Provider store={storeForSecondTest}>
            <MemoryRouter>
              <MoviePage
                films={films}
                reviews={reviews}
                match={match}
              />
            </MemoryRouter>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
