import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchMovies } from "../../actions/movies";

import { connect } from "react-redux";
import MoviesList from "../MoviesList";
class MoviesPage extends Component {
  static propTypes = {
    movies: PropTypes.object.isRequired,
  };

  componentDidMount = () => {
    this.props.fetchMovies();
  };

  render() {
    console.log("props from the redux store", this.props);
    return (
      <div>
        <h2>Movies </h2>
        <MoviesList movies={this.props.movies} />
      </div>
    );
  }
}
const mapDispatchToProps = {
  fetchMovies,
};
const mapStateToProps = ({ movies }) => {
  return { movies };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
