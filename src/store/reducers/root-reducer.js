import {combineReducers} from "redux";
import {filmData} from "../film-data/film-data";
import {filmProcess} from "../film-process/film-process";

export const NameSpace = {
  DATA: `DATA`,
  FILM: `FILM`,
};

export default combineReducers({
  [NameSpace.DATA]: filmData,
  [NameSpace.FILM]: filmProcess,
});
