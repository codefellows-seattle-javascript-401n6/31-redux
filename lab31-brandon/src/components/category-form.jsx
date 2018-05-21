import React from 'react';
import {connect} from 'react-redux';
import {create, update, destroy} from '../actions/category-actions.jsx';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            budget: 0,
            isEditing: false, 
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleBudgetChange = this.handleBudgetChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(ev) {
        let newState= {name: ev.target.value}
        this.setState(newState)
        }

    handleBudgetChange(ev) {
        let newState= {budget: ev.target.value}
        this.setState(newState)
        }

    handleSubmit(ev) {
        ev.preventDefault();
        let submitForm = this.props.name;
        if (this.props.name === 'create') {
            this.props.create(this.state);
        } else if (this.props.name === 'update') {
            let newValue = Object.assign(this.state, {isEditing: false, id: this.props.id});
            this.props.update(this.state);
        }
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}> 
        <input type='text' 
               onChange={this.handleNameChange}
               name='name' 
               placeholder='Name'
               required="true">
        </input>
        <input type='number'
               onChange={this.handleBudgetChange}
               name='budget' 
               placeholder='Alloted Budget'
               required="true">
        </input>
        <button type="submit">Submit</button>
    </form>
    )
  }
}
const mapStateToProps = state => ({
      categories: state.categories
    });
    
    const mapDispatchToProps = (dispatch, getState) => {
      return {
        create: value => dispatch(create(value)),
        update: values => dispatch(update(values)),
      }
    }

export default connect (mapStateToProps, mapDispatchToProps)(CategoryForm);