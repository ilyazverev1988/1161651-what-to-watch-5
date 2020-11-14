import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withTabs from "./with-tabs";

configure({adapter: new Adapter()});
const MockComponent = () => <div />;
const preventDefault = () =>{};
const MockComponentWrapped = withTabs(MockComponent);

it(`Should change state depending on click on button`, () => {
  const wrapper = shallow(
      <MockComponentWrapped/>
  );

  expect(wrapper.state().Overview).toEqual(true);
  expect(wrapper.state().Details).toEqual(false);
  expect(wrapper.state().Reviews).toEqual(false);

  wrapper.instance()._handleClickDetails({preventDefault});
  expect(wrapper.state().Overview).toEqual(false);
  expect(wrapper.state().Details).toEqual(true);
  expect(wrapper.state().Reviews).toEqual(false);

  wrapper.instance()._handleClickOverview({preventDefault});
  expect(wrapper.state().Overview).toEqual(true);
  expect(wrapper.state().Details).toEqual(false);
  expect(wrapper.state().Reviews).toEqual(false);

  wrapper.instance()._handleClickReviews({preventDefault});
  expect(wrapper.state().Overview).toEqual(false);
  expect(wrapper.state().Details).toEqual(false);
  expect(wrapper.state().Reviews).toEqual(true);
});
