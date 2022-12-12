import { NEW_MOVIE_FULFILLED, NEW_MOVIE_REJECTED } from "../actions/newMovie";

const initialState = {
  fetching: false,
  movies: [],
  error: {},
};

export default (state = initialState, action) => {
  //console.log("moviesaction", action);
  switch (action.type) {
    case NEW_MOVIE_FULFILLED:
      return {
        ...state,
        movies: action.payload,
      };
    case NEW_MOVIE_REJECTED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
