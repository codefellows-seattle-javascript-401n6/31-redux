import React from 'react';
import {connect} from 'react-redux';

import {
  create,
  update,
  // remove,
} from '../actions/actions.jsx';

import Category from './category.jsx';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.list = this.list.bind(this);
  }

  list() {
    console.log('list() this.props.category= ', this.props.category);
    return this.props.category.map((category, index) => {
      return <Category 
        category={category}
        // remove={this.props.remove}
        update={this.props.update}
        key={index} index={index}/>;
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