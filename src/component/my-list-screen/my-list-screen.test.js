import React from "react";
import renderer from "react-test-renderer";
import MyList from "./my-list-screen";
import films from "../../mocks/films";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";

const noop = () => {};
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

describe(`Should MyList render correctly`, () => {
  it(`With filmActive`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <MyList
                filmActive={``}
                films={films}
                handleMouseEnterFilm={noop}
                handleMouseOverFilm={noop}
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

  it(`No filmActive`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <MyList
                filmActive={1}
                films={films}
                handleMouseEnterFilm={noop}
                handleMouseOverFilm={noop}
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
