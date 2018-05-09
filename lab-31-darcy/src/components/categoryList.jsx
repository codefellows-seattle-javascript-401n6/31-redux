import React from 'react';
import {connect} from 'react-redux';

import Category from './category.jsx';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.list = this.list.bind(this);
  }

  list() {
    return this.props.categories.map(category => {
      return <Category 
        category={category}
        isEditing={category.isEditing}
        key={category.id} id={category.id}/>;
    });
  }

  render() {
    return <li id="budget-list">
      {this.list()}
    </li>;

  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch) => {
  return {
    create: category => dispatch(create(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);