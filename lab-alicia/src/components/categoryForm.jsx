import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
} from '../action/category-actions.jsx';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      budget: '',
      isEditing: false,
    }

    this.handlChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(ev) {
    let newState = {
      name: ev.target.value
    }
    this.setState(newState);
  }

  handleSubmit(ev) {
    let submitFormName = this.props.name;
    ev.preventDefault();
    if (this.props.name === 'create') {
      this.props.categoryCreate(this.state, {isEditing: false, 
        id: this.props.id});
      let newValue = Object.assign(this.state, {isEditing: false, 
        id: this.props.id});
       this.props.categoryUpdate(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="name" type="text" placeholder="category name" required="true"/>
        <input onChange={this.handleChange} 
        name="budget" type="text" 
        placeholder="budget amount" required="true"/>
        <button type="submit">
        Submit</button>
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
    categoryUpdate: val => dispatch(categoryUpdate(val)),
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(CategoryForm);