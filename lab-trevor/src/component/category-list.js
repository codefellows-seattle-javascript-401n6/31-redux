import React from 'react';

import CategoryItem from './category-item.js';

class CategoryList extends React.Component {
  constructor(props){
    super(props);
  }

  

  list(){
    console.log('categories', this.props.categories);
    return this.props.categories.map((categories, index) => {

      return <CategoryItem name={categories.name} budget={categories.budget}
      key={index} index={index}
      // updateNote={this.props.updateNote}
      // removeNote={this.props.removeNote}
      // cancel={this.props.cancel}
      />
    });
  }

  render(){
    console.log('render')
    return <ul>
      {this.list()}
      </ul>
  }
}

export default CategoryList;