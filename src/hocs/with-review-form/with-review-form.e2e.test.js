import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withReviewForm from "./with-review-form";

configure({adapter: new Adapter()});
const MockComponent = () => <div />;

const MockComponentWrapped = withReviewForm(MockComponent);

it(`Should change state depending on send review`, () => {
  const wrapper = shallow(
      <MockComponentWrapped/>
  );

  expect(wrapper.state().error).toEqual(``);
  expect(wrapper.state().rating).toEqual(`5`);
  expect(wrapper.state().isSendButtonEnable).toEqual(false);
  expect(wrapper.state().reviewText).toEqual(``);

  wrapper.instance()._handleFieldChange({target: {name: `reviewText`, value: `123`}});
  expect(wrapper.state().reviewText).toEqual(`123`);
  expect(wrapper.state().isSendButtonEnable).toEqual(false);

  wrapper.instance()._handleFieldChange({target: {name: `rating`, value: `3`}});
  expect(wrapper.state().rating).toEqual(`3`);
  expect(wrapper.state().isSendButtonEnable).toEqual(false);

  wrapper.instance()._handleFieldChange({target: {name: `reviewText`, value: `qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq`}});
  wrapper.instance()._handleFieldChange({target: {name: `rating`, value: `3`}});
  expect(wrapper.state().isSendButtonEnable).toEqual(true);
});
