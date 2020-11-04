import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  films: [],
  comments: []
};

const filmData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_COMMENTS_OF_FILM:
      return extend(state, {
        comments: action.payload,
      });
  }
  return state;
};

export {filmData};
