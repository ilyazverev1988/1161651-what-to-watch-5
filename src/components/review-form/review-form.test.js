import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form";

it(`Render ReviewForm without error`, () => {
  const tree = renderer
      .create(
          <ReviewForm
            id={`1`}
          />
      )
      .toJSON();
  expect(tree).toMatchSnapshot();
});
