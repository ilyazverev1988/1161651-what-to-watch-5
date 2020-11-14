import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withPlayerScreen from "./with-player-screen";
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

const MockComponentWrapped = withPlayerScreen(MockComponent);
const match = {params: {id: `4`}};

it(`withPlayerScreen is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        films={films}
        match={match}
      >
        <React.Fragment/>
      </MockComponentWrapped>, {
        createNodeMock: () => {
          return {
            play: () => {},
            pause: () => {},
            src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          };
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
