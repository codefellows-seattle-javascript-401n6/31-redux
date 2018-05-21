import React from 'react';
import {connect} from 'react-redux';
import {update, destroy} from '../actions/category-actions.jsx';
import CategoryForm from './category-form.jsx';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this),
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleOffEdit = this.toggleOffEdit.bind(this);
  }

  toggleEdit(ev) {
    let id = ev.target.id;
    this.props.update({isEditing: true, id});
  }

  toggleOffEdit(ev) {
    let id = ev.target.id;
    this.props.update({isEditing: false, id});
  }

  handleDelete(ev) {
    ev.preventDefault();
    let id = ev.target.id;
    this.props.destroy(id);
  }

  render() {
    if(this.props.isEditing === true) {
      return (
        <div>
          <CategoryForm name="update" 
            id={this.props.id}>
          </CategoryForm>
          <button 
            onClick={this.toggleOffEdit}
            id={this.props.id}>
            Cancel
          </button>
        </div>
      );
    }
    return (
      <li key={this.props.key} 
        id={this.props.id}>
        {this.props.name}: ${this.props.budget} 
        <button 
          id={this.props.id} 
          onClick={this.handleDelete}>
          Delete
        </button>
        <button 
          id={this.props.id} 
          onClick={this.toggleEdit}>
          Edit
        </button>
      </li> 
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});
    
const mapDispatchToProps = (dispatch, getState) => {
  return {
    update: (values) => dispatch(update(values)),
    destroy: id => dispatch(destroy(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem); 
