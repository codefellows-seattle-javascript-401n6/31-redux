import React from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import { createCategory } from '../actions/index.js';

const mapDispatchToProps = dispatch => {
  return {
    createCategory: category => dispatch(createCategory(category))
  };
};

class ConnectedForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.createCategory({ title, id });
    this.setState({ title: ''});
  }

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-wrapper'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type='submit'>Save</button>
      </form>
    );
  }
}

const CategoryForm = connect(null, mapDispatchToProps)(ConnectedForm);
export default CategoryForm;
