import { combineReducers } from "redux";

import movies from "./movies.js";
import newMovie from "./newMovie.js";

export default combineReducers({
  movies,
  newMovie,
});
