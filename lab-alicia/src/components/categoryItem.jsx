import React from 'react';
import {connect} from 'react-redux';
import {
  categoryUpdate,
  // categoryDestroy,
} from '../action/category-actions.jsx';

import CategoryForm from './categoryForm.jsx';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);

  //   this.handleDelete = this.handleDelete.bind(this),
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit(ev) {
    let id = ev.target.id;
    this.props.categoryUpdate({isEditing: true, id})
  }

  // handleDelete(ev) {
  //   ev.preventDefault();
  //   let id = ev.target.id;
  //   this.props.categoryDestroy(id);
  // }

  render() {
    if(this.props.isEditing === true) {
      return (
        <CategoryForm name="update" id={this.props.id}>
        </CategoryForm>
        )
      }
      return (
        <li key={this.props.key} id={this.props.id}>
        {this.props.name} 
        {/* <button id={this.props.id} onClick={this.handleDelete}>Delete</button> */}
        <button id={this.props.id} onClick={this.toggleEdit}>
        Edit</button>
        </li> 
      )
    }
  }

  const mapStateToProps = state => ({
    categories: state.categories
  });
    
  const mapDispatchToProps = (dispatch, getState) => {
    return {
      categoryUpdate: (values) => dispatch(categoryUpdate(values)),
      // categoryDestroy: id => dispatch(categoryDestroy(id))
    }
  }

  export default connect
  (mapStateToProps, mapDispatchToProps)(CategoryItem);