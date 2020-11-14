import React from "react";
import renderer from "react-test-renderer";
import ReviewForMovie from "./review-for-movie-screen";
import films from "../../mocks/films";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";

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
  }
});

describe(`Should ReviewForMovie render correctly`, () => {
  it(`With films`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <ReviewForMovie
                films={films}
                match={match}
              />
            </MemoryRouter>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
