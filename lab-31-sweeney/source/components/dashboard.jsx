import React from 'react';
import CategoryList from './categoryList';
import CategoryForm from './categoryForm';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return <div>
      <h1>Track Your Budget </h1>
      <h2> Create Budget Category:</h2>
      <CategoryForm buttonText="create" />
      <CategoryList/>
      </div>; 
  }
}

export default Dashboard;