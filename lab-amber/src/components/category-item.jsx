import React from 'react';
import {connect} from 'react-redux';
import {
  categoryDestroy,
} from '../actions/category-actions.js';


class CategoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    console.log('delete click id', event.target.id);
    let id = event.target.id;
    this.props.categoryDestroy(id);
  }

  render() {
    return (
      <li key={this.props.key} id={this.props.id}>{this.props.name}: ${this.props.budget} <button id={this.props.id} onClick={this.handleDelete}>X</button></li>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryDestroy: id => dispatch(categoryDestroy(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);