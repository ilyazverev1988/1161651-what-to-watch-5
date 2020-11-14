import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ListOfGenres} from "./list-of-genres";

const genres = [`All genres`, `Action`, `Crime`, `Drama`, `Adventure`, `Comedy`, `Fantasy`];
const activeGenre = `All genres`;

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should genre list item be pressed`, () => {
  const changeActiveFilter = jest.fn();

  const wrapper = shallow(
      <ListOfGenres
        genres={genres}
        activeGenre={activeGenre}
        changeActiveFilter={changeActiveFilter}
      />
  );

  const genreListItem = wrapper.find(`li.catalog__genres-item`).at(1);
  genreListItem.simulate(`click`, {
    preventDefault: () => {
    }
  });
  expect(changeActiveFilter).toHaveBeenCalledTimes(1);
});
