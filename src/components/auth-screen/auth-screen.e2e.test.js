import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AuthScreen from "./auth-screen";

Enzyme.configure({
  adapter: new Adapter(),
});

const noop = () => {};

it(`Should value input password was change`, () => {
  const handleChangeEmail = jest.fn();

  const wrapper = shallow(
      <AuthScreen
        handleChangePassword={noop}
        handleChangeEmail={handleChangeEmail}
        handleSubmit={noop}
        errorAuthorization={``}
        errorPassword={``}
        errorEmail={``}
      />
  );

  const inputEmail = wrapper.find(`#user-email`);
  inputEmail.simulate(`change`);
  expect(handleChangeEmail).toHaveBeenCalledTimes(1);
});

it(`Should value input email was change`, () => {
  const handleChangePassword = jest.fn();

  const wrapper = shallow(
      <AuthScreen
        handleChangePassword={handleChangePassword}
        handleChangeEmail={noop}
        handleSubmit={noop}
        errorAuthorization={``}
        errorPassword={``}
        errorEmail={``}
      />
  );

  const inputPassword = wrapper.find(`#user-password`);
  inputPassword.simulate(`change`);
  expect(handleChangePassword).toHaveBeenCalledTimes(1);
});

it(`Should send data from form`, () => {
  const handleSubmit = jest.fn();

  const wrapper = shallow(
      <AuthScreen
        handleChangePassword={noop}
        handleChangeEmail={noop}
        handleSubmit={handleSubmit}
        errorAuthorization={``}
        errorPassword={``}
        errorEmail={``}
      />
  );

  const formAuth = wrapper.find(`form.sign-in__form`);
  formAuth.simulate(`submit`);
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});


