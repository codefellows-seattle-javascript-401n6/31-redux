import React from 'react';
import {connect} from 'react-redux';
import {
  categoryUpdate,
  categoryDestroy
} from '../actions/category-actions';
import CategoryForm from './CategoryForm';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    };


controlDelete = (id) => {
      this.props.onDestroy(id);
    };



render() {

  return (
    <div className="categoryFormItem">
      <div>
        {this.props.arrayElement.name}--${this.props.arrayElement.price}
      </div>
      <button onClick={() => this.controlDelete(this.props.arrayElement.id)}>
        Remove Item (Category)
      </button>
      <CategoryForm category={this.props.arrayElement} onSubmit={this.props.update}
      name="update"/>
    </div>
  )
}
    
};

export default CategoryItem;