import {extend} from "../../../utils";
import {ActionType} from "../../action";
import films from "../../../mocks/films";

const initialState = {
  films: [],
};

const filmData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
  }
  return state;
};

export {filmData};
