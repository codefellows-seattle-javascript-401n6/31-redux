import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from './CategoryForm';
// import CategoryItem from './CategoryItem';
import {
  categoryCreate,
  categoryUpdate,
  categoryDestroy
} from '../actions/category-actions';

class Dashboard extends React.Component {
  render() {
    return  (
      <div>
        <h1>
          This is my Dashboard
        </h1>
        <CategoryForm onSubmit={this.props.dashboardCategoryCreate} />
      </div>
    )
  }
};

// const mapStateToProps = (state) => ({
  //the same way to write the function without use of return
// })  //same as the function below of the same name
const mapStateToProps = (state) => {
  return {
   dashboardPropertyCategories: state.categories
  };
};

const mapDispatchToProps = (dispatch) => {//is how the app interacts with the store
                                          //the store takes the action, runs it through the reducer
                                          //and then updates the state
  return {
    dashboardCategoryCreate: (categoryObj) => dispatch(categoryCreate(categoryObj)),
    dashboardCategoryUpdate: () => dispatch(categoryUpdate()),
    dashboardCategoryDestroy: () => dispatch(categoryDestroy()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);