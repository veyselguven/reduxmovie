import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import MoviesList from "../MoviesList";
class MoviesPage extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
  };
  render() {
    console.log("props from the redux store", this.props);
    return (
      <div>
        <h2>MoviesPage</h2>
        <MoviesList movies={this.props.movies} />
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return { movies };
};

export default connect(mapStateToProps)(MoviesPage);
