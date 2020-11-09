import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withActiveItem from "./with-active-item";
import films from "../../mocks/films";

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

it(`withActiveItem is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        films={films}
      >
        <React.Fragment/>
      </MockComponentWrapped>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
