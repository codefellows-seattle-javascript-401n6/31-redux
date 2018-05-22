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


controlDelete = (event) => {
      event.preventDefault();
      let id = event.target.id;
      this.props.categoryDestroy(id);
    };


    
};
