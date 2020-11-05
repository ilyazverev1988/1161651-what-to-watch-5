import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {returnFilmsWithChanges} from "../../../utils";

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
    case ActionType.UPDATE_DATA_FILM:
      return extend(state, {
        films: returnFilmsWithChanges(state.films, action.payload)
      });
  }
  return state;
};

export {filmData};
