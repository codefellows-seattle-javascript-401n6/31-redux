import React from 'react';
import {connect} from 'react-redux';

import CategoryItem from './category-item.jsx';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.displayAllCategories = this.displayAllCategories.bind(this);
  }

  displayAllCategories() {
    return this.props.categories.map(category => {
      return <CategoryItem key={category.id} id={category.id} name={category.name} budget={category.budget} isEditing={category.isEditing}></CategoryItem>
    });
  }

  render() {
    return (
      <div>
        <h1>Current budget list:</h1>
        <ul>{this.displayAllCategories()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: val => dispatch(categoryCreate(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);