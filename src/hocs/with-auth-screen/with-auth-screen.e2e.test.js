import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withAuthScreen from "./with-auth-screen";
import configureMockStore from "redux-mock-store";

configure({adapter: new Adapter()});
const mockStore = configureMockStore();
const store = mockStore({
  USER: {
    errorAuthorization: ``,
  },
});
const MockComponent = () => <div />;

const MockComponentWrapped = withAuthScreen(MockComponent);

it(`Should change state depending on input`, () => {
  const wrapper = shallow(
      <MockComponentWrapped store={store}
      />
  );

  expect(wrapper.dive().dive().state().errorEmail).toEqual(`Please enter a valid email address`);
  expect(wrapper.dive().dive().state().errorPassword).toEqual(`Please enter a password`);

  let newWrapper = wrapper.dive().dive();
  newWrapper.instance()._handleChangeEmail({target: {value: `1@mail.ru`}});
  expect(newWrapper.state().inputEmail).toEqual(`1@mail.ru`);
  expect(newWrapper.state().errorEmail).toEqual(``);

  newWrapper.instance()._handleChangePassword({target: {value: `1`}});
  expect(newWrapper.state().inputPassword).toEqual(`1`);
  expect(newWrapper.state().errorPassword).toEqual(``);
});

