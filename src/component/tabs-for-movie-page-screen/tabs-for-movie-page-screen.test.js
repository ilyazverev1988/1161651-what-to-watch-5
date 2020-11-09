import React from "react";
import renderer from "react-test-renderer";
import TabsForMoviePageScreen from "./tabs-for-movie-page-screen";
import films from "../../mocks/films";
import reviews from "../../mocks/reviews";

const noop = () => {};

describe(`Should TabsForMoviePageScreen render correctly`, () => {
  it(`With active Details`, () => {
    const tree = renderer
      .create(
          <TabsForMoviePageScreen
            film={films[1]}
            reviews={reviews}
            handleClickOverview={noop}
            handleClickDetails={noop}
            handleClickReviews={noop}
            Details={true}
            Overview={false}
            Reviews={false}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`With active Overview`, () => {
    const tree = renderer
      .create(
        <TabsForMoviePageScreen
          film={films[1]}
          reviews={reviews}
          handleClickOverview={noop}
          handleClickDetails={noop}
          handleClickReviews={noop}
          Details={false}
          Overview={true}
          Reviews={false}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`With active Reviews`, () => {
    const tree = renderer
      .create(
        <TabsForMoviePageScreen
          film={films[1]}
          reviews={reviews}
          handleClickOverview={noop}
          handleClickDetails={noop}
          handleClickReviews={noop}
          Details={false}
          Overview={false}
          Reviews={true}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
