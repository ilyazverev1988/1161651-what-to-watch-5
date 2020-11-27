import React from "react";
import ReviewForm from "./review-form";
import {render as renderTest, fireEvent} from '@testing-library/react';

it(`Should button for send disable, if input review not valid`, () => {
  const form = renderTest(<ReviewForm id={`1`}/>);
  expect(form.getByText(`Post`).hasAttribute(`disabled`)).toBe(true);

  fireEvent.change(form.getByPlaceholderText(`Review text`), {target: {value: `pppppppppppppp`}});
  expect(document.querySelector(`#reviewText`).value).toBe(`pppppppppppppp`);
  expect(form.getByText(`Post`).hasAttribute(`disabled`)).toBe(true);
});

it(`Should button for send disable, if input review valid`, () => {
  const form = renderTest(<ReviewForm id={`1`}/>);
  expect(form.getByText(`Post`).hasAttribute(`disabled`)).toBe(true);

  fireEvent.change(form.getByPlaceholderText(`Review text`), {target: {value: `pppppppppppppddddddddddddddddddddddddddddddddddddddp`}});
  expect(document.querySelector(`#reviewText`).value).toBe(`pppppppppppppddddddddddddddddddddddddddddddddddddddp`);
  expect(form.getByText(`Post`).hasAttribute(`disabled`)).toBe(false);
});

