import React from 'react';
import {Link} from 'react-router-dom';


class CategoryItem extends React.Component {
  constructor(props){
    super(props);
    
  }

  render(){
    
    return <div >
      <div>Name: {this.props.name}</div>
      <div>Budget: $ {this.props.budget}</div>
      </div>
  }
}

export default CategoryItem;