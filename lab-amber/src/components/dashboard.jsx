import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
  categoryDestroy,
} from '../actions/category-actions.js';

import CategoryList from './category-list.jsx';
import CategoryForm from './category-form.jsx';

class Dashboard extends React.Component {
  render() {
    return <div>
      <h2>Create A Category:</h2>
      <CategoryForm></CategoryForm>
      <h1>Your Budget Summary</h1>
      <CategoryList></CategoryList>
    </div>
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: () => dispatch(categoryCreate()),
    categoryUpdate: () => dispatch(categoryUpdate()),
    categoryDestroy: id => dispatch(categoryDestroy(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);