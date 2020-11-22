import React from "react";
import Enzyme, {shallow} from "enzyme";
import ReactDOM, {render, unmountComponentAtNode} from 'react-dom';
import Adapter from "enzyme-adapter-react-16";
import ReviewForm from "./review-form";
import {act} from 'react-dom/test-utils';
/*
Enzyme.configure({
  adapter: new Adapter(),
});
*/
let container = null;

beforeEach(() => {
  container = document.createElement(`div`);
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it(`Should button for send disable, if input review`, () => {
  act(() => {
    render(<ReviewForm id={`1`}/>, container);
  });

  const inputReview = container.querySelector(`#reviewText`);
  let buttonSend = container.querySelector(`.add-review__btn`);
  act(() => {
    inputReview.value = `рррррррррggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg`;
    inputReview.dispatchEvent(new InputEvent(`input`, {bubbles: true, cancelable: true}));
  });
  buttonSend = container.querySelector(`.add-review__btn`);
  expect(buttonSend.hasAttribute(`disabled`)).toBe(false);
});

it(`Should button for send disable, if select rating`, () => {
  act(() => {
    render(<ReviewForm id={`1`}/>, container);
  });

  const inputRating = container.getElementById(`star-1`);
  const buttonSend = container.querySelector(`.add-review__btn`);
  act(() => {
    inputRating.dispatchEvent(new InputEvent(`input`, {value: `1`}));
  });
  expect(buttonSend.hasAttribute(`disabled`)).toBe(true);
});

it(`Should button for send enable, if input valid data`, () => {
  act(() => {
    render(<ReviewForm id={`1`}/>, container);
  });

  const inputReview = container.querySelector(`#reviewText`);

  act(() => {
    inputReview.value = `ррррррррррррnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn`;

    inputReview.dispatchEvent(new InputEvent(`input`, {bubbles: true, cancelable: true}));
  });
  const buttonSend = container.querySelector(`.add-review__btn`);
  expect(buttonSend.getAttribute(`disabled`)).toBe(``);
});


