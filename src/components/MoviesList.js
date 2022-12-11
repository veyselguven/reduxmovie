import React from "react";

function MoviesList(props) {
  console.log("movieListProps=>", props);
  const emptyMessage = <p>There are no movies yet</p>;

  const moviesList = (
    <div>
      {props.movies.error.response ? (
        <h3>Errorr retreiving data!</h3>
      ) : (
        <h1>Hata yok</h1>
      )}
    </div>
  );
  return <div>{props.movies.length === 0 ? emptyMessage : moviesList} </div>;
}

export default MoviesList;
