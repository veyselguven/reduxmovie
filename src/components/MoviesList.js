import React from "react";

function MoviesList(props) {
  console.log("movieListProps=>", props);
  const emptyMessage = <p>There are no movies yet</p>;

  const moviesList = <div>MoviesList</div>;
  return <div>{props.movies.length === 0 ? emptyMessage : moviesList} </div>;
}

export default MoviesList;
