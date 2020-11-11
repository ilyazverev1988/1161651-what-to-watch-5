import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
//import withAuthScreen from "./with-auth-screen";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";

configure({adapter: new Adapter()});
const mockStore = configureMockStore();
const store = mockStore({
  USER: {
    errorAuthorization: ``,
  },
});
/*const MockComponent = () => <div />;
const withAuthScreen = () => <div />;
const MockComponentWrapped = withAuthScreen(MockComponent);
*/
it(`Should change state depending on input`, () => {
  const wrapper = shallow(
        <div
          errorAuthorization={``}
          onSubmit={() => {
          }}
        />
);

  expect(wrapper.state().errorEmail).toEqual(`Please enter a valid email address`);
  expect(wrapper.state().errorPassword).toEqual(`Please enter a password`);

  wrapper.state().inputEmail.onChange(`1@mail.ru`);
  expect(wrapper.state().errorEmail).toEqual(``);

  wrapper.state().inputPassword.onChange(`11`);
  expect(wrapper.state().errorEmail).toEqual(``);
});

