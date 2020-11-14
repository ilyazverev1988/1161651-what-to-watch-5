import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withTabs from "./with-tabs";
import films from "../../mocks/films";
import reviews from "../../mocks/reviews";

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

const MockComponentWrapped = withTabs(MockComponent);

it(`withTabs is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        film={films[3]}
        reviews={reviews}
      >
        <React.Fragment/>
      </MockComponentWrapped>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
