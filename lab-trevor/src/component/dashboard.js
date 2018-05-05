import React from 'react'
import {connect} from 'react-redux';
import {
  catCreate,
  catUpdate,
  catDestroy,
} from '../action/budget-actions';

import CategoryList from './category-list.js'
import CategoryForm from './category-form'

class Dashboard extends React.Component {
  constructor(props){
    super(props);
      
   
  }

 render() {
    return <div>
         <h1>{this.props.appName}</h1>
         <CategoryForm createCategory={this.props.catCreate}/>
         <CategoryList categories={this.props.categories}/>
    </div>
 }
};

const mapStateToProps = state => ({
  // data: state.data,
  appName: state.appName,
  categories: state.categories
});

// TODO: find out what's up getState here.
const mapDispatchToProps = (dispatch, getState) => {
  return {
    catCreate: (data) => dispatch(catCreate(data)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);