import React from 'react';
import{connect} from 'react-redux';
import {
    categoryUpdate,
    categoryDestroy,
} from '..//actions/category-actions.js';

import CategoryForm from './category-form.jsx';

class CategoryItem extends React.Component {
    constructor(props) {
        super(props);

        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleEditOff = this.toggleEditOff.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    toggleEdit(event) {
        let id = event.target.id;
        this.props.categoryUpdate({isEditing: trus, id });
    }

    toggleEditOff(event) {
        let id = event.target.id;
        this.props.categoryUpdate({isEditing: false, id});
    }

    handleRemove(event) {
        event.preventDefault();
        let id = event.target.id;
        this.props.categoryDestroy(id);
    }

    render() {
        if(this.props.isEditing === true) {
            return (
                <div>
                    <CategoryForm name="update" id={this.props.id}></CategoryForm>
                    <button onClick={this.toggleEditOff} id={this.props.id}>Edit Off</button>
                </div>
            )
        }
        return (
            <li key={this.props.key} id={this.props.id}>
            {this.props.name}: ${this.props.budget}
            <button id={this.props.id} onClick={this.handleRemove}>Remove</button>
            <button id={this.props.id} onClick={this.toggleEdit}>Edit On</button>
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