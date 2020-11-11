import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewForm from "./review-form";

Enzyme.configure({
  adapter: new Adapter(),
});

const noop = () => {};

it(`Should value input review was change`, () => {
  const handleFieldChange = jest.fn();

  const wrapper = shallow(
      <ReviewForm
        error={true}
        handleSubmit={noop}
        handleFieldChange={handleFieldChange }
        handlePostReview={noop}
        isSendButtonEnable={true}
      />
  );

  const inputReview = wrapper.find(`#reviewText`);
  inputReview.simulate(`change`);
  expect(handleFieldChange).toHaveBeenCalledTimes(1);
});

it(`Should form was submit`, () => {
  const handleSubmit = jest.fn();

  const wrapper = shallow(
      <ReviewForm
        error={true}
        handleSubmit={handleSubmit}
        handleFieldChange={noop}
        handlePostReview={noop}
        isSendButtonEnable={true}
      />
  );

  const formtReview = wrapper.find(`form.add-review__form`);
  formtReview.simulate(`submit`);
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

it(`Should submit button be pressed`, () => {
  const handlePostReview = jest.fn();

  const wrapper = shallow(
      <ReviewForm
        error={true}
        handleSubmit={noop}
        handleFieldChange={noop}
        handlePostReview={handlePostReview}
        isSendButtonEnable={true}
      />
  );

  const buttonSunbit = wrapper.find(`button.add-review__btn`);
  buttonSunbit.simulate(`click`);
  expect(handlePostReview).toHaveBeenCalledTimes(1);
});
