import React from "react";
import renderer from "react-test-renderer";
import AuthScreen from "./auth-screen";
import {MemoryRouter} from 'react-router-dom';

let errorEmail = `Please enter a valid email address`;
let errorPassword = `Please enter a password`;
let errorAuthorization = `We can’t recognize this email and password combination. Please try again.`;
const noop = () => {};

describe(`Should AuthScreen render correctly`, () => {
  it(`With no error`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <AuthScreen
              errorEmail={``}
              errorPassword={``}
              errorAuthorization={``}
              handleChangePassword={noop}
              handleChangeEmail={noop}
              handleSubmit={noop}
            />
          </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`With errorEmail`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <AuthScreen
              errorEmail={errorEmail}
              errorPassword={``}
              errorAuthorization={``}
              handleChangePassword={noop}
              handleChangeEmail={noop}
              handleSubmit={noop}
            />
          </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`With errorPassword`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <AuthScreen
              errorEmail={``}
              errorPassword={errorPassword}
              errorAuthorization={``}
              handleChangePassword={noop}
              handleChangeEmail={noop}
              handleSubmit={noop}
            />
          </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`With errorAuthorization`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <AuthScreen
              errorEmail={``}
              errorPassword={``}
              errorAuthorization={errorAuthorization}
              handleChangePassword={noop}
              handleChangeEmail={noop}
              handleSubmit={noop}
            />
          </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
