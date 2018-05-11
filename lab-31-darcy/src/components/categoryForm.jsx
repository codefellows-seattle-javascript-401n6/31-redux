import React from 'react';
import { connect } from 'react-redux';

import {
  create,
  update,
} from '../actions/actions.jsx';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.name,
      budget: this.budget,
      isEditing: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // let submitFormName = this.props.name;
    if (this.props.name === 'create') {
      this.props.create(this.state);
    } else if (this.props.name === 'update') {
      let newValue = Object.assign(this.state, { isEditing: false, id: this.props.id });
      this.props.update(this.state);
    }
  }

  handleNameChange(event) {
    let newState = {
      name: event.target.value
    };
    this.setState(newState);
  }

  handleBudgetChange(event) {
    let newState = {
      budget: event.target.value
    };
    this.setState(newState);
  }

// handleChange(event) {
//   this.setState({ [event.target.id]: event.target.value });
// }

  render() {
    return <form id="add-cat" onSubmit={this.handleSubmit}>
      <input
        onChange={this.handleNameChange}
        name="name"
        type="text"
        placeholder="Category"
        required="true"
      />

      <input
        onChange={this.handleBudgetChange}
        name="budget"
        type="text"
        placeholder="Budget"
        required="true"
      />

      <button type="submit"> Add Category </button>
    </form>;
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    create: value => dispatch(create(value)),
    update: value => dispatch(update(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);