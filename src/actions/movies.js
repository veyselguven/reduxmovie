import axios from "axios";
import { API_BASE } from "../config/env";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";

export function fetchMovies() {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${API_BASE}/movies`);
      dispatch({ type: FETCH_MOVIES, payload: res.data });
    } catch (err) {
      dispatch({ type: FETCH_MOVIES_ERROR, payload: err });
    }
  };
}
