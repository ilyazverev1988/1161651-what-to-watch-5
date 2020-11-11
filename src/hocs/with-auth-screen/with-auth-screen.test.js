import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withActiveItem from "../with-active-item/with-active-item";


const noop = () => {};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withActiveItem(MockComponent);

describe(`Should MoviePage render correctly`, () => {
  it(`With error Autorization`, () => {
    const tree = renderer.create(
      <MockComponentWrapped
        onSubmit={noop}
        errorAuthorization={`We can’t recognize this email and password combination. Please try again.`}
      >
        <React.Fragment/>
      </MockComponentWrapped>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Without error Autorization`, () => {
    const tree = renderer.create(
      <MockComponentWrapped
        onSubmit={noop}
        errorAuthorization={``}
      >
        <React.Fragment/>
      </MockComponentWrapped>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
