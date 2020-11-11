import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TabsForMoviePageScreen from "./tabs-for-movie-page-screen";
import films from "../../mocks/films";
import reviews from "../../mocks/reviews";

Enzyme.configure({
  adapter: new Adapter(),
});

const noop = () => {};

it(`Should overview button be pressed`, () => {
  const handleClickReviews = jest.fn();

  const wrapper = shallow(
      <TabsForMoviePageScreen
        film={films[1]}
        reviews={reviews}
        handleClickOverview={noop}
        handleClickDetails={noop}
        handleClickReviews={ handleClickReviews}
        Details={true}
        Overview={false}
        Reviews={false}
      />
  );

  const buttonOverview = wrapper.find(`a.movie-nav__link`).at(`2`);
  buttonOverview.simulate(`click`);
  expect(handleClickReviews).toHaveBeenCalledTimes(1);
});

it(`Should details button be pressed`, () => {
  const handleClickDetails = jest.fn();

  const wrapper = shallow(
      <TabsForMoviePageScreen
        film={films[1]}
        reviews={reviews}
        handleClickOverview={noop}
        handleClickDetails={handleClickDetails}
        handleClickReviews={noop}
        Details={false}
        Overview={true}
        Reviews={false}
      />
  );

  const buttonOverview = wrapper.find(`a.movie-nav__link`).at(`1`);
  buttonOverview.simulate(`click`);
  expect(handleClickDetails).toHaveBeenCalledTimes(1);
});

it(`Should reviews button be pressed`, () => {
  const handleClickReviews = jest.fn();

  const wrapper = shallow(
      <TabsForMoviePageScreen
        film={films[1]}
        reviews={reviews}
        handleClickOverview={noop}
        handleClickDetails={noop}
        handleClickReviews={handleClickReviews}
        Details={false}
        Overview={true}
        Reviews={false}
      />
  );

  const buttonOverview = wrapper.find(`a.movie-nav__link`).at(`2`);
  buttonOverview.simulate(`click`);
  expect(handleClickReviews).toHaveBeenCalledTimes(1);
});
