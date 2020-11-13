import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {user} from "./user";
import {ActionType} from "../../action";
import {AuthorizationStatus} from "../../../const";
import {checkAuth, login} from "../../api-action";


const api = createAPI(() => {});
const userData = {
  id: 1,
  email: `3@mail.ru`,
  name: `3`,
  avatarURL: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/10.jpg`,
  errorAuthorization: ``
};


it(`Reducer user without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userData: {},
    errorAuthorization: ``
  });
});

it(`Reducer should update authorization status after authorization`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });
});

it(`Reducer should update user data after authorization`, () => {
  expect(user({
    userData: {},
  }, {
    type: ActionType.LOAD_USER_DATA,
    payload: userData,
  })).toEqual({
    userData,
  });
});

it(`Reducer should update error authorization if in authorization`, () => {
  expect(user({
    errorAuthorization: ``,
  }, {
    type: ActionType.WRITE_ERROR,
    payload: `errorAuthorization`,
  })).toEqual({
    errorAuthorization: `errorAuthorization`
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const statusUserLoader = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return statusUserLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_USER_DATA,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API post call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `test@test.ru`, password: `123456`};
    const questionLoader = login(fakeUser);

    apiMock
      .onPost(`/login`)
      .reply(200, [{fake: true}]);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_USER_DATA,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/`,
        });
      });
  });
});
