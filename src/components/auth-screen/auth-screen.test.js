import React from "react";
import renderer from "react-test-renderer";
import AuthScreen from "./auth-screen";
import {MemoryRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({
  USER: {
    errorAuthorization: ``
  }
});

it(`Should render AuthScreen with initial state`, () => {
  const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <AuthScreen/>
            </MemoryRouter>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
  expect(tree).toMatchSnapshot();
});
