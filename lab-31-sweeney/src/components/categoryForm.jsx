import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
} from '../action/category-actions.jsx';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: new Date(),
      name: '',
      budget: 0,
      isEditing: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(ev) {
    this.setState({[ev.target.name]: ev.target.value});
  }

  handleSubmit(ev) {
    ev.preventDefault();
    if (this.props.buttonText === 'create') {
      this.props.categoryCreate(this.state);
    }
    if (this.props.buttonText === 'update') {
      let newValue = Object.assign(this.state, {isEditing: false, id: this.props.id
      });
      this.props.categoryUpdate(newValue); //newvalue
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange} 
          name="name" 
          type="text" 
          placeholder="name" 
          value={this.state.name}
        />
        <input 
          onChange={this.handleChange} 
          name="budget" 
          type="text" 
          placeholder="budget" 
          value={this.state.budget}
        />
        <button type='submit'>
          {this.props.buttonText === 'create' ? 'Submit Task' : 'Update Task'} 
        </button>

      </form>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: val => dispatch(categoryCreate(val)),
    categoryUpdate: val => dispatch(categoryUpdate(val)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(CategoryForm);