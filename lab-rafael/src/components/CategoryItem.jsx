import React from 'react';
import { connect } from 'react-redux';
import CategoryEdit from './CategoryEdit.jsx';


class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }

    this.handleDestroy = this.handleDestroy.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }

  handleDestroy() {
    this.props.destroyCategory(this.props.id);
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  finishEdit(category) {
    console.log('new state from item', category);
    this.props.updateCategory(category);
    this.toggleEdit();
  }

  render() {
    if(this.state.isEditing) {
      return <CategoryEdit
          toggleEdit={this.toggleEdit}
          finishEdit={this.finishEdit}
          title={this.props.title}
          number={this.props.number}
          id={this.props.id}
        />
    }
    return <li className='list-item'>
        {this.props.title}
        {this.props.number}
        <button onClick={this.handleDestroy}>delete</button>
        <button onClick={this.toggleEdit}>Update</button>
      </li>
  }
}

export default CategoryItem;
