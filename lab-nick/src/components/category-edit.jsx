'use strict';

import React from 'react';

class CategoryEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      title: this.props.number,
      id: this.props.id
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleChange(evt) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.finishEdit(this.state);
  }

  cancel() {
    this.props.toggleEdit();
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleChange} value={this.state.title} id="title"></input>
      <input type="number" onChange={this.handleChange} value={this.state.number} id="title"></input>
      <button onClick={this.cancel}>Cancel</button>
      <button type="submit">Save</button>
    </form>
  }
}

export default CategoryEdit;