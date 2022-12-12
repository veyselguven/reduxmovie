import axios from "axios";
import { API_BASE } from "../config/env";

export const NEW_MOVIE_FULFILLED = "NEW_MOVIE_FULFILLED";
export const NEW_MOVIE_REJECTED = "NEW_MOVIE_REJECTED";

export function onNewMovieSubmit({ title, cover }) {
  console.log("title,cover=>", title, cover);
  return (dispatch) => {
    dispatch({
      type: NEW_MOVIE_FULFILLED,
      payload: axios
        .post(`${API_BASE}/movies`, {
          title,
          cover,
        })
        .then((result) => console.log(result)),
    });
  };
}
// export function fetchMovies() {
//   return async (dispatch) => {
//     try {
//       let res = await axios.get(`${API_BASE}/movies`);
//       dispatch({ type: FETCH_MOVIES, payload: res.data });
//     } catch (err) {
//       dispatch({ type: FETCH_MOVIES_ERROR, payload: err });
//     }
//   };
// }
