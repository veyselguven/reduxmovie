import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import InlineErrors from "./InlineErrors";

export default class NewMovieForm extends Component {
  state = {
    title: "",
    cover: "",
    errors: {},
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = () => {
    const errors = this.validate();
    console.log(errors);
    this.setState({
      errors,
    });
    if (Object.keys(errors).length === 0) {
      this.props.onNewMovieSubmit(this.state);
    }
    this.setState({
      title: "",
      cover: "",
    });
  };

  validate = () => {
    const errors = {};
    if (!this.state.title) errors.title = "Can't be blank";
    if (!this.state.cover) errors.cover = "Can't be empty";
    return errors;
  };
  render() {
    console.log("newMovieform=>", this.props);
    const { errors } = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching}>
          <Form.Field error={!!errors.title}>
            <label>Title </label>
            {errors.title && <InlineErrors message={errors.title} />}
            <input
              id="title"
              name="title"
              value={this.state.title}
              placeholder="Title"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field error={!!errors.cover}>
            <label>Cover URL</label>
            {errors.cover && <InlineErrors message={errors.cover} />}
            <input
              id="cover"
              name="cover"
              value={this.state.cover}
              placeholder="Cover URL"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
