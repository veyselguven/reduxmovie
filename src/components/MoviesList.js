import React from "react";
import MovieCard from "./MovieCard";
import { Grid } from "semantic-ui-react";

function MoviesList(props) {
  console.log("movieListProps=>", props);
  const emptyMessage = <p>There are no movies yet</p>;

  const moviesList = (
    <div>
      {props.movies.error.response ? (
        <h3>Errorr retreiving data!</h3>
      ) : (
        <Grid stackable columns={3}>
          {props.movies.moviesList.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </Grid>
      )}
    </div>
  );
  return <div>{props.movies.length === 0 ? emptyMessage : moviesList} </div>;
}

export default MoviesList;
