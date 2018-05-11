import React from 'react';
import {connect} from 'react-redux';

import {
  update,
  remove
} from '../actions/actions.jsx';

import CategoryForm from './categoryForm.jsx';

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.toggleUpdateOff = this.toggleUpdateOff.bind(this);
  }

  handleRemove(event, id) {
    console.log('removing', id);
    event.preventDefault();
    this.props.remove(id);
  }

  toggleUpdate(event, id) {
    console.log('TOGGLE-UPDATE EVENT', event);
    console.log('TOGGLE-UPDATE ID', id);
    this.props.update({isEditing: true, id});
  }

  toggleUpdateOff(event, id) {
    this.props.update({isEditing: false, id});
  }

  render() {
    if (this.props.isEditing === true) {
      return ( 
        <div>
          <CategoryForm id={this.props.id} />
          <button onClick={(event) => this.toggleUpdateOff(event, this.props.id)}> Cancel </button>
        </div>
      );
    }
    return (
      <li>
        {this.props.name}: ${this.props.budget}
        <button onClick={(event) => this.handleRemove(event, this.props.id)}> Remove </button>
        {/* <button onClick={(event) => this.toggleUpdate(event, this.props.id)}> Update </button> */}
        <button onClick={this.toggleUpdate}> Update </button>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    update: (value) => dispatch(update(value)),
    remove: (id) => dispatch(remove(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);