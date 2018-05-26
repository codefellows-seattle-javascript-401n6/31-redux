import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from './CategoryForm';
import CategoryItem from './CategoryItem';
import {
  categoryCreate,
  categoryUpdate,
  categoryDestroy
} from '../actions/category-actions';

class Dashboard extends React.Component {
  render() {
    let stateCategoryArray = this.props.dashboardPropertyCategories;
    return  (
      <div>
        <h1>
          This is my Dashboard
        </h1>
        <h1>Add Category</h1>
        <CategoryForm onSubmit={this.props.dashboardCategoryCreate} />
        {stateCategoryArray.map((element) => {
          return <CategoryItem update={this.props.dashboardCategoryUpdate} 
          key={element.id} arrayElement={element}
          onDestroy={this.props.dashboardCategoryDestroy}/>
        })}
      </div>
    )
  }
};

// const mapStateToProps = (state) => ({
  //the same way to write the function without use of return
// })  //same as the function below of the same name
const mapStateToProps = (state) => {
  return {
   dashboardPropertyCategories: state.categoriesList
  };
};

const mapDispatchToProps = (dispatch) => {//is how the app interacts with the store
                                          //the store takes the action, runs it through the reducer
                                          //and then updates the state
  return {
    dashboardCategoryCreate: (categoryObj) => dispatch(categoryCreate(categoryObj)),
    dashboardCategoryUpdate: (categoryObj) => dispatch(categoryUpdate(categoryObj)),
    dashboardCategoryDestroy: (id) => dispatch(categoryDestroy(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);