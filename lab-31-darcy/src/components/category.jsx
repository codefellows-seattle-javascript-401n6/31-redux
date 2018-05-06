import React from 'react';

import { Link } from 'react-router-dom';
import CategoryUpdateForm from './categoryUpdateForm.jsx';

import {
  create,
  update,
  remove,
} from '../actions/actions.jsx';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.remove = this.remove.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.finishUpdate = this.finishUpdate.bind(this);
  }

  remove() {
    console.log('removing', this.props.id);
    this.props.remove(this.props.id);
  }

  toggleUpdate() {
    this.setState({isEditing: !this.state.isEditing});
  }

  finishUpdate(updatedItem) {
    this.setState({isEditing: false});
    this.props.update(updatedItem, this.props.id);
  }

  render() {
    if (this.state.isEditing) {
      return <CategoryUpdateForm 
        catName={this.props.category.catName}
        budget={this.props.category.budget}
        finishUpdate={this.finishUpdate}
        toggleUpdate={this.toggleUpdate} />;
    }
    return <div>
      <ul id="budget-item">
        <li id="list-catName">
          <Link to={'/' + this.props.category}>
            {this.props.category.catName + ':' }
          </Link>
        </li>
      </ul>
      <ul>
        <li id="list-budget"> {this.props.category.budget} </li>
      </ul>
      <button id="remove" onClick={this.remove}> Remove </button>
      <button onClick={this.toggleUpdate}> Update </button>
    </div>;
  }
}

export default Category;