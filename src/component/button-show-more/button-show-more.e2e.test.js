import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ButtonShowMore} from "./button-show-more";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should catalog button be pressed`, () => {
  const changeNumberShownCards = jest.fn();

  const wrapper = shallow(
      <ButtonShowMore
        cardsOfShownFilms={8}
        changeNumberShownCards={changeNumberShownCards}
      />
  );

  const catalogButton = wrapper.find(`button.catalog__button`);
  catalogButton.simulate(`click`, {
    preventDefault: () => {
    }
  });
  expect(changeNumberShownCards).toHaveBeenCalledTimes(1);
});
