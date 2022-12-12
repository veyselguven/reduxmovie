import React, { Component } from "react";
import { connect } from "react-redux";
import { onNewMovieSubmit } from "../../actions/newMovie";

import NewMovieForm from "../NewMovieForm";

class NewMoviePage extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(props);
  // }
  render() {
    console.log("store from redux to newMovie", this.props);
    return (
      <div>
        <NewMovieForm
          onNewMovieSubmit={this.props.onNewMovieSubmit}
          newMovie={this.props} // comes from redux store
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state.newMovie;
};
const mapDispatchToProps = {
  onNewMovieSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);
