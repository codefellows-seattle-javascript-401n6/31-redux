import React from 'react';
import {connect} from 'react-redux';

import Category from './category.jsx';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.list = this.list.bind(this);
  }

  list() {
    return this.props.category.map(category => {
      return <Category 
        category={category}
        isEditing={category.isEditing}
        key={category.id} id={category.id}/>;
    });
  }

  render() {
    return <ul id="budget-list">
      {this.list()}
    </ul>;

  }
}

const mapStateToProps = state => ({
  category: state.category,
});

const mapDispatchToProps = (dispatch) => {
  return {
    create: category => dispatch(create(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);