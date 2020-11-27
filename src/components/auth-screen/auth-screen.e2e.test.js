import React from "react";
import {AuthScreen} from "./auth-screen";
import {render as renderTest, fireEvent} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';

it(`Should valid value input email in authScreen`, () => {
  const history = createMemoryHistory();
  const authScreen = renderTest(
      <Router history={history}>
        <AuthScreen errorAuthorization={``}/>
      </Router>);
  expect(document.querySelector(`.sign-in__btn`).hasAttribute(`disabled`)).toBe(true);
  expect(document.querySelector(`.sign-in__message`).textContent).toBe(`Please enter a valid email address`);
  fireEvent.change(authScreen.getByPlaceholderText(`Email address`), {target: {value: `3@mail.ru`}});
  expect(document.querySelector(`#user-email`).value).toBe(`3@mail.ru`);
  expect(document.querySelector(`.sign-in__btn`).hasAttribute(`disabled`)).toBe(true);
  expect(document.querySelector(`.sign-in__message p`).textContent).toBe(``);
});

it(`Should invalid value input email in authScreen`, () => {
  const history = createMemoryHistory();
  const authScreen = renderTest(
      <Router history={history}>
        <AuthScreen errorAuthorization={``}/>
      </Router>);
  expect(document.querySelector(`.sign-in__btn`).hasAttribute(`disabled`)).toBe(true);
  expect(document.querySelector(`.sign-in__message`).textContent).toBe(`Please enter a valid email address`);
  fireEvent.change(authScreen.getByPlaceholderText(`Email address`), {target: {value: `3@mail`}});
  expect(document.querySelector(`#user-email`).value).toBe(`3@mail`);
  expect(document.querySelector(`.sign-in__btn`).hasAttribute(`disabled`)).toBe(true);
  expect(document.querySelector(`.sign-in__message p`).textContent).toBe(`Please enter a valid email address`);
});

it(`Should value input password in authScreen`, () => {
  const history = createMemoryHistory();
  const authScreen = renderTest(
      <Router history={history}>
        <AuthScreen errorAuthorization={``}/>
      </Router>);
  expect(document.querySelector(`.sign-in__btn`).hasAttribute(`disabled`)).toBe(true);
  expect(document.querySelector(`.sign-in__message`).textContent).toBe(`Please enter a valid email address`);
  fireEvent.change(authScreen.getByPlaceholderText(`Password`), {target: {value: `3`}});
  expect(document.querySelector(`#user-password`).value).toBe(`3`);
  expect(document.querySelector(`.sign-in__btn`).hasAttribute(`disabled`)).toBe(true);
  expect(document.querySelector(`.sign-in__message p`).textContent).toBe(`Please enter a valid email address`);
});

it(`Should value valid input email and password in authScreen`, () => {
  const history = createMemoryHistory();
  const authScreen = renderTest(
      <Router history={history}>
        <AuthScreen errorAuthorization={``}/>
      </Router>);
  expect(document.querySelector(`.sign-in__btn`).hasAttribute(`disabled`)).toBe(true);
  expect(document.querySelector(`.sign-in__message`).textContent).toBe(`Please enter a valid email address`);
  fireEvent.change(authScreen.getByPlaceholderText(`Password`), {target: {value: `3`}});
  fireEvent.change(authScreen.getByPlaceholderText(`Email address`), {target: {value: `3@mail.ru`}});
  expect(document.querySelector(`#user-password`).value).toBe(`3`);
  expect(document.querySelector(`#user-email`).value).toBe(`3@mail.ru`);
  expect(document.querySelector(`.sign-in__btn`).hasAttribute(`disabled`)).toBe(false);
  expect(document.querySelector(`.sign-in__message p`).textContent).toBe(``);
});


