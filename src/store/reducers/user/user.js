import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {},
  errorAuthorization: ``
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_USER_DATA:
      return Object.assign({}, state, {
        userData: action.payload,
      });
    case ActionType.WRITE_ERROR:
      return Object.assign({}, state, {
        errorAuthorization: action.payload,
      });
  }

  return state;
};
export {user};
