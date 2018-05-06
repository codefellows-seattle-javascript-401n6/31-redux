import React from 'react';
import{connect} from 'react-redux';
import {
    categoryUpdate,
    categoryDestroy,
} from '../actions/category-actions.js';

import CategoryForm from './category-form.jsx';

class CategoryItem extends React.Component {
    constructor(props) {
        super(props);

        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleEditOff = this.toggleEditOff.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    toggleEdit(event, id) {
        // let id = event.target.id;
        this.props.categoryUpdate({isEditing: true, id });
    }

    toggleEditOff(event, id) {
        // let id = event.target.id;
        this.props.categoryUpdate({isEditing: false, id});
    }

    handleRemove(event) {
        event.preventDefault();
        let id = event.target.id;
        this.props.categoryDestroy(id);
    }

    render() {
        const categoryId = this.props.id;
        if(this.props.isEditing === true) {
            return (
                <div>
                    <CategoryForm id={this.props.id} name="update"></CategoryForm>
                    <button onClick={(e)=>this.toggleEditOff(e, categoryId)}>Edit Off</button>
                </div>
            )
        }
        return (
            <li key={this.props.key}>
            {this.props.name}: ${this.props.budget}
            <button onClick={this.handleRemove}>Remove</button>
            <button onClick={(e)=>this.toggleEdit(e, categoryId)}>Edit On</button>
            </li>
        )
    }
}

const mapSateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        categoryUpdate: (values) => dispatch(categoryUpdate(values)),
        categoryDestroy: id => dispatch(categoryDestroy(id)),
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(CategoryItem);