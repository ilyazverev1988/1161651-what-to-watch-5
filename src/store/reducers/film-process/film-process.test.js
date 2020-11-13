import {filmProcess} from "./film-process";
import {ActionType} from "../../action";
import constant from "../../../const";

const {ALL_GENRE, BASE_NUMBER_OF_CARDS} = constant;

it(`Reducer filmProcess without additional parameters should return initial state`, () => {
  expect(filmProcess(void 0, {})).toEqual({
    activeGenre: ALL_GENRE,
    cardsOfShownFilms: BASE_NUMBER_OF_CARDS
  });
});

it(`Reducer should change filter genre films`, () => {
  expect(filmProcess({
    activeGenre: ALL_GENRE,
  }, {
    type: ActionType.CHANGE_FILTER_GENRE_FILMS,
    payload: `Action`,
  })).toEqual({
    activeGenre: `Action`,
    cardsOfShownFilms: 8
  });
});

it(`Reducer should change filter genre films`, () => {
  expect(filmProcess({
    activeGenre: ALL_GENRE,
  }, {
    type: ActionType.CHANGE_FILTER_GENRE_FILMS,
    payload: `Action`,
  })).toEqual({
    activeGenre: `Action`,
    cardsOfShownFilms: 8
  });
});

it(`Reducer should change number of cards shown`, () => {
  expect(filmProcess({
    cardsOfShownFilms: 8,
  }, {
    type: ActionType.CHANGE_NUMBER_SHOWN_FILMS,
    payload: 16,
  })).toEqual({
    cardsOfShownFilms: 16
  });
});
