import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from './CategoryForm';
import {
  categoryCreate,
  categoryUpdate,
  categoryDestroy
} from '../actions/category-actions';

class Dashboard extends React.Component {
  render() {
    return  (
      <div>
        This is my Dashboard
        <CategoryForm onSubmit={this.props.dashboardCategoryCreate} />
      </div>
    )
  }
};

// const mapStateToProps = (state) => ({
  //the same way to write the function without use of return
// })
const mapStateToProps = (state) => {
  return {
   dashboardPropertyCategories: state.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dashboardCategoryCreate: (categoryObj) => dispatch(categoryCreate(categoryObj)),
    dashboardCategoryUpdate: () => dispatch(categoryUpdate()),
    dashboardCategoryDestroy: () => dispatch(categoryDestroy()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);