import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
} from '../actions/category-actions.js';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      budget: 0
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    let newState = {
      name: event.target.value
    }
    this.setState(newState);
  }

  handleBudgetChange(event) {
    let newState = {
      budget: event.target.value
    }
    this.setState(newState);
  }

  handleSubmit(event) {
    console.log('category-form state', this.state);
    event.preventDefault();
    this.props.categoryCreate(this.state);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleNameChange} type="text" placeholder="category name"/>
        <input onChange={this.handleBudgetChange}name="budget" type="text" placeholder="budget amount"/>
        <button type="submit">Add</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: val => dispatch(categoryCreate(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);