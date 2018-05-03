import React from 'react';
import {connect} from 'react-redux';
import {
  categoryUpdate,
  categoryDestroy,
} from '../actions/category-actions.js';

import CategoryForm from './category-form.jsx';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit(event) {
    console.log('edit toggled target', event.target);
    console.log('edit toggled target', event.target.id);
    let id = event.target.id;
    this.props.categoryUpdate({isEditing: true, id});;
  }

  handleDelete(event) {
    event.preventDefault();
    console.log('delete click id', event.target.id);
    let id = event.target.id;
    this.props.categoryDestroy(id);
  }

  render() {
    console.log('is this item editing? ', this.props.isEditing);
    if (this.props.isEditing === true) {
      return (
        <CategoryForm name="update" id={this.props.id}></CategoryForm>
      )
    }
    return (
      <li key={this.props.key} id={this.props.id}>{this.props.name}: ${this.props.budget} <button id={this.props.id} onClick={this.handleDelete}>X</button> <button id={this.props.id} onClick={this.toggleEdit}>Edit</button></li>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: (values) => dispatch(categoryUpdate(values)),
    categoryDestroy: id => dispatch(categoryDestroy(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);