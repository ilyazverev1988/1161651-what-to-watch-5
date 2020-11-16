import React from "react";
import renderer from "react-test-renderer";
import {Avatar} from "./avatar";
import {MemoryRouter} from "react-router-dom";

const userData = {
  id: 1,
  email: `3@mail.ru`,
  name: `3`,
  avatarURL: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/10.jpg`,
  errorAuthorization: ``
};


describe(`Should AuthScreen render correctly`, () => {
  it(`With Autorization`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Avatar
              userData={userData}
              authorizationStatus={`AUTH`}
            />
          </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Without Autorization`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Avatar
              userData={``}
              authorizationStatus={`NO AUTH`}
            />
          </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
