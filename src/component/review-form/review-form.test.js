import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form";
import {MemoryRouter} from "react-router-dom";

const noop = () => {};

describe(`Should ReviewForm render correctly`, () => {
  it(`With error`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <ReviewForm
              error={true}
              handleSubmit={noop}
              handleFieldChange={noop}
              handlePostReview={noop}
              isSendButtonEnable={true}
            />
          </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`No error`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <ReviewForm
              error={``}
              handleSubmit={noop}
              handleFieldChange={noop}
              handlePostReview={noop}
              isSendButtonEnable={true}
            />
          </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`With disable send`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <ReviewForm
              error={true}
              handleSubmit={noop}
              handleFieldChange={noop}
              handlePostReview={noop}
              isSendButtonEnable={false}
            />
          </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
