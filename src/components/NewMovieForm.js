import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

export default class NewMovieForm extends Component {
  state = {
    title: "",
    cover: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>New Movie Form</h2>
        <Form>
          <Form.Field>
            <label>Title </label>
            <input
              id="title"
              name="title"
              value={this.state.title}
              placeholder="Title"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Cover URL</label>
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
